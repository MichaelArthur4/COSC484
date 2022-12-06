import { useContext } from 'react'
import {Link} from 'react-router-dom'
import PostForm from '../components/Fields/PostForm'
import PostList from '../components/PostList'
import UserContext from '../context/UserContext'

function MainPage(){
    //add in follower post list later
    const {curUser} = useContext(UserContext)
    return(
        <>
            <div></div>
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
                <PostForm />
                <h1>Ideally we would have a list of friend's posts here but there's no way we're going to get to that</h1>
            </div>
            </>
    )
}

export default MainPage
