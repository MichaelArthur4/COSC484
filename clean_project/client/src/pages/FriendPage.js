import { useContext } from "react";
import FriendInfo from "../components/friends/FriendInfo";
import FriendTop3 from "../components/friends/FriendTop3";
import UserContext from "../context/UserContext";
function FriendPage({user}){
    if(!user){

        return(
            <p>No Users Found</p>
        )
    }    
    if(user){
    return(
        <div>
            
            <FriendInfo user = {user}/>
            <FriendPage user = {user}/>
        </div>
    )}
    



}
export default FriendPage