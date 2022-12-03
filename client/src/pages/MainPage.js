import { useContext } from 'react'
import {Link} from 'react-router-dom'
import PostForm from '../components/Fields/PostForm'
import PostList from '../components/PostList'

function MainPage({user}){
 
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
                <h1>Ideally we would have a list of friend's posts here but there's no way we're going to get to that</h1>
            </div>
            </>
    )
}

export default MainPage