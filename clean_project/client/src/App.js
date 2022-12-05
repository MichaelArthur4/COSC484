import {UserProvider} from './context/UserContext'
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import MainPage from './pages/MainPage';
import FriendsListPage from './pages/FriendsListPage';
import ProfilePage from './pages/ProfilePage';
import Header from './components/Header';
import SettingsPage from './pages/SettingsPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SidebarPage from './pages/SidebarPage';
import TestingPage from './pages/TestingPage';
import {Auth} from './context/Auth';
import { AuthContext } from './context/AuthContext';

function App() {

  const { token, login, logout, ID, curUser, getCurrentUser } = Auth();
  
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
    <Route path = '/profile' element = {<ProfilePage />} />
    <Route path = '/friendslist' element = {<FriendsListPage />} />
    <Route path = '/settings' element = {<SettingsPage/>}/>
    <Route path = '/sidebar' element = {<SidebarPage/>}/>
    </>)
  } 
  
  return (
    <AuthContext.Provider value = {{ID, token, login, logout, curUser, getCurrentUser}}>
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