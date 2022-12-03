import Post from "./Post"
import { useContext } from "react"
import UserContext from "../context/UserContext"

function PostList(){
   const {curUser} = useContext(UserContext)
        return(
                <div>This is the post list that I will fix later </div>
        )
/*
    return (<div className = 'post-feed'>
                <p> this is the post feed</p>
                {curUser.posts ? curUser.posts.map((post) =>
            <h2>{post}</h2>) : <h2>No posts!</h2>}
        </div>)*/
    
}
export default PostList
/*{songs.map((song) => (
        <Post song={song} user={user} />
))}*/
/*
  
*/