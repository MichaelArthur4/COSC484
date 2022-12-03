import Card from "../shared/Card";
import {Link} from 'react-router-dom'
function FriendCard({friend}){
    //function to retreive the info of a user based off username
    //to display in a friendpage
    var username = 'user_friend'
    var url = "https://st3.depositphotos.com/7486768/17806/v/600/depositphotos_178065822-stock-illustration-profile-anonymous-face-icon-gray.jpg?forcejpeg=true"

    return(
        <div className = 'friend-card'>
            <Link to=  '/friend'>
                <Card>
                    <img src = {url} alt = "friend" height = {50} width = {50}/>
                    <h5 onClick = {{}}>{username}</h5>
                </Card>
            </Link>
        </div>
    )
 }
 export default FriendCard

