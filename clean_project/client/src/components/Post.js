import {Link} from 'react-router-dom'
import Card from './shared/Card'
function Post({song, user}){
    //when click on image or username should take to profile
    //Need like/comment
    //Spotify url?
    var url1 = "https://st3.depositphotos.com/7486768/17806/v/600/depositphotos_178065822-stock-illustration-profile-anonymous-face-icon-gray.jpg?forcejpeg=true"
    var username = 'Mike_a'
    var songname = 'Song'
    var artist = 'Artist'
    var review = "This is my review of Song by Artist"
    return(
        <Card>
            <Link to='/profile'>{user.username}</Link>
            <Link to ='/profile'><img src = {user.url} alt = "me" height = {100} width = {100}/></Link>
            <h2>{song.songname} - {song.artist}</h2>
            <p>{review}</p>
        </Card>
    )
}

export default Post