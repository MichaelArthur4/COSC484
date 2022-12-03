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
        <div>
            Main Page
            <Link to= '/profile'>
                Profile 
            </Link>
                   
            <Link to= '/signup'>
                Signup 
            </Link>
            <Link to= '/login'>
                Login
            </Link>
            <Link to='/friendslist'>
                FriendList
            </Link>
            </div>
            <div>
                <PostForm />
            </div>
            </>
    )
}

export default MainPage