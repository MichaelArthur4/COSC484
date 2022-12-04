import {useCallback, useContext, useState} from 'react'
import UserContext, {UserProvider} from './context/UserContext'
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import MainPage from './pages/MainPage';
import FriendsListPage from './pages/FriendsListPage';
import ProfilePage from './pages/ProfilePage';
import Header from './components/Header';
import SettingsPage from './pages/SettingsPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SidebarPage from './pages/SidebarPage';
import FriendPage from './pages/FriendPage';
import TestingPage from './pages/TestingPage';
import {useNavigate} from 'react-router-dom';
import {Auth} from './context/Auth';
import { AuthContext } from './context/AuthContext';

function App() {

  const { token, login, logout, ID, curUser } = Auth();
  
  var routes; 
  
  if(!token){
    routes = (<>
    <Route path ='/signup' element = {<SignUpPage />} />
    <Route path = '/testing' element = {<TestingPage />} />
    <Route path = '/*' element = {<LogInPage />} /> 
   
    </>
    )
    }
   if(token){
    routes = (<>
    <Route path = '/*' element = {<MainPage />} />
    <Route path = '/:username' element = {<ProfilePage />} />
    <Route path = '/friendslist' element = {<FriendsListPage />} />
    <Route path = '/settings' element = {<SettingsPage/>}/>
    <Route path = '/sidebar' element = {<SidebarPage/>}/>
    </>)
  } 
  
  return (
    <AuthContext.Provider value = {{ID, token, login, logout, curUser}}>
    <UserProvider>
    <div>
    <Router>
    <Header />
      <div>
      <Routes>
        {routes}
      </Routes>
      </div>
    </Router> 
    </div> 
    </UserProvider>
    </AuthContext.Provider>
  )
}


export default App;
//<Route path = '/friend' element = {<FriendPage /> }/>
/*
<Route exact path = '/' element = {<MainPage />} />
<Route path ='/signup' element = {<SignUpPage />} />
<Route path = '/profile' element = {<ProfilePage />} />
<Route path = '/friendslist' element = {<FriendsListPage />} />
<Route path = '/Login' element = {<LogInPage />} />
<Route path = '/settings' element = {<SettingsPage/>}/>
<Route path = '/sidebar' element = {<SidebarPage/>}/>
<Route path = '/fa' element = {<FuckingAroundPage/>}/>
*/