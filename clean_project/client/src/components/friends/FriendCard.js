import Card from "../shared/Card";
import {Link} from 'react-router-dom'
import FriendPage from "../../pages/FriendPage";
import UserContext from "../../context/UserContext";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
function FriendCard({friend, isFriend}){

    var username = '1'
    var url = "https://st3.depositphotos.com/7486768/17806/v/600/depositphotos_178065822-stock-illustration-profile-anonymous-face-icon-gray.jpg?forcejpeg=true"
    const {curUser} = useContext(AuthContext)
    const {addFollowing} = useContext(UserContext)
    const [follows, setFollows] = useState(isFriend)
    const id = friend._id
    const meId = curUser._id

    const clickyClick = () => {
        const data = {
            id: id,
            idMe: meId
        }
        setFollows(!follows)
        addFollowing(data)
    }

    if(friend.username != curUser.username){
    return(
        <div className = 'friend-card'>
                <Card>
                    <img src = {friend.profileUrl} alt = "friend" height = {50} width = {50}/>
                    <h5>{friend.username}</h5>
                    {follows ? <button>Unfollow</button>:<button onClick = {clickyClick}>Follow</button>}
                </Card>
        </div>
    )
 }}
 export default FriendCard

