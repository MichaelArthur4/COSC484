
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import MainPage from './pages/MainPage';
import FriendsListPage from './pages/FriendsListPage';
import ProfilePage from './pages/ProfilePage';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


const App = ()  => {
  var user = {
    "username": "user_username111",
    "bio": "This is the bio. Feel free to add something if you think it should be longer",
    "url": "https://st3.depositphotos.com/7486768/17806/v/600/depositphotos_178065822-stock-illustration-profile-anonymous-face-icon-gray.jpg?forcejpeg=true",
    "topsongs": [
        "Fav Song",
        "Second Fav Song",
        "Third Fav Song"
    ],
    "topartists": [
        "Fav Artist",
        "Second Fav Artist",
        "Third Fav Artist"
    ],
    "posts": [
      {
        'song' : 'Song 1',
        'review': 'This song is okay'
    },
    {
      'song': 'Song 2',
      'review': 'This song is good'
    },{
      'song': 'Song 3',
      'review': 'This song sucks'
    }]
}

var friend  = {
  "username": "friend_username",
  "bio": "This is the friend bio, it could probably be styled exactly the same as the users",
  "url": "https://st3.depositphotos.com/7486768/17806/v/600/depositphotos_178065822-stock-illustration-profile-anonymous-face-icon-gray.jpg?forcejpeg=true",
  "topsongs": [
      "Fav Song",
      "Second Fav Song",
      "Third Fav Song"
  ],
  "topartists": [
      "Fav Artist",
      "Second Fav Artist",
      "Third Fav Artist"
  ],

}
  var routes = (<>
    <Route path ='/signup' element = {<SignUpPage />} />
    <Route path = '/*' element = {<LogInPage />} /> 
    <Route path = '/main' element = {<MainPage user = {user}/>} />
    <Route path = '/profile' element = {<ProfilePage user = {user}/>} />
    <Route path = '/friendslist' element = {<FriendsListPage friend = {friend}/>} />
    </>)

  return (
    <Router>
    <Header />
      <div>
      <Routes>
        {routes}
      </Routes>
      </div>
    </Router> 
  );
};

export default App;
