import {Link} from 'react-router-dom'
import Card from './shared/Card'
function Post({song, user}){
  
    var review = "This is my review of Song by Artist"
    var song = "Song"
    var artist = 'Artist'
    var user = 'Username'
    var url = "https://st3.depositphotos.com/7486768/17806/v/600/depositphotos_178065822-stock-illustration-profile-anonymous-face-icon-gray.jpg?forcejpeg=true"
    return(
        <Card>
            <Link to='/profile'>{user}</Link>
            <Link to ='/profile'><img src = {url} alt = "me" height = {100} width = {100}/></Link>
            <h2>{song} - {artist}</h2>
            <p>{review}</p>
        </Card>
    )
}

export default Post