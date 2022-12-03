import Post from "./Post"
import { useContext } from "react"
import Card from "./shared/Card"


function PostList({user}){
        return(
                <>
                <div>Posts</div>
                {user.posts.map((post) => (
                        <Card>
                        <h2>Song: {post.song}</h2>
                        <p>{post.review}</p>
                        </Card>
                ))}
                </>
        )


 
    
}
export default PostList
/*{songs.map((song) => (
        <Post song={song} user={user} />
))}*/