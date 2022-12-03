import Card from "../shared/Card";
import {Link} from 'react-router-dom'
import FriendPage from "../../pages/FriendPage";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
function FriendCard({friend}){
    //function to retreive the info of a user based off username
    //to display in a friendpage
    var username = '1'
    var url = "https://st3.depositphotos.com/7486768/17806/v/600/depositphotos_178065822-stock-illustration-profile-anonymous-face-icon-gray.jpg?forcejpeg=true"
    const {setTargetUser, targetUser} = useContext(UserContext)

    const setTarget = () => {
        setTargetUser({username})
    }



    return(
        <div className = 'friend-card'>
            <Link to=  '/friend'>
                <Card>
                    <img src = {url} alt = "friend" height = {50} width = {50}/>
                    <h5 onClick = {setTarget}>{username}</h5>
                    {targetUser && <h3>{targetUser.bio}</h3>}
                </Card>
            </Link>
        </div>
    )
 }
 export default FriendCard

