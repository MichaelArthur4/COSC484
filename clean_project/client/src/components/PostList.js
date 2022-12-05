import Post from "./Post"
import { useContext } from "react"
import UserContext from "../context/UserContext"
import { AuthContext } from "../context/AuthContext"
import Card from "./shared/Card"

function PostList(){
   const {curUser} = useContext(AuthContext)
        return(
                <>
                <h2>{curUser.username}'s Song Reviews: </h2>
                {curUser.posts ? curUser.posts.map((post) => (
                        <Card>
                          <h4>{post.songname}</h4>
                          <p>{post.review}</p>
                          <h3>------------------</h3>
                        </Card>
                        
                )) : <p>No posts yet</p>}
                </>
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