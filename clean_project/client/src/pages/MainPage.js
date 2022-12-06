import { useContext } from 'react'
import {Link} from 'react-router-dom'
import PostForm from '../components/Fields/PostForm'
import PostList from '../components/PostList'

import UserContext from '../context/UserContext'
import {useEffect, useState} from 'react'
import axios from 'axios'
function MainPage(){
    //add in follower post list later
    const {curUser} = useContext(UserContext)
    
    const CLIENT_ID ="4986ec912f6e461ca78d512c27c7c5a2"
    const CLIENT_SECRET ="13d987bd28c54ea8b253197d5f61bb2b"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE ="token"

    const [token, setToken] = useState("")
    const [searchInput, setSearchInput] = useState("");
    const logout = ()=>{
        setToken("")
        window.localStorage.removeItem("token")
    }
    const searchArtists = async (e) =>{
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchInput,
                type: "artist"
            }
        })
        console.log(data);
    }
    
    
    useEffect(()=>{
        var authParameters = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id='+ CLIENT_ID + '&client_secret=' + CLIENT_SECRET
        }
        fetch('https://accounts.spotify.com/api/token', authParameters)
        .then(result => result.json())
        .then(data => setToken(data.access_token))
    },[])

    async function search(){
        console.log("Search for "+ searchInput);
        var artistParameters = {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }

        var artistID = await fetch ('https://api.spotify.com/v1/search' + searchInput + '&type=artist',artistParameters)

    }

    



    return(
        <>
            <div>
            </div>
            <div class="menu">
            
            <div class="bar">
            Main Page
            </div>
            
           
            <Link to= '/profile' class="bar" >
                Profile 
            </Link>


            <Link to= '/signup' class="bar">
                Signup 
            </Link>
 

   
            <Link to= '/login' class="bar">
                Login
            </Link>
          

            <Link to='/friendslist' class="bar">
                FriendList
            </Link>
            </div>
            <div>
            {!token?
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
            : <button onClick={logout}>Logout</button>
            }

            {token ?
            <form onSubmit={searchArtists}>
            <input type="text" onChange={e => setSearchInput(e.target.value)}/>
            <button type ={"submit"}>Search</button>
            </form>
            :<h3>Please login </h3>
            }
            </div>
            
  
      
            <div>
                <PostForm />
                <h1>Ideally we would have a list of friend's posts here but there's no way we're going to get to that</h1>
            </div>
            </>
    )
}

export default MainPage