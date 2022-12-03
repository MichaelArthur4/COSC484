import { useContext } from "react";
import FriendInfo from "../components/friends/FriendInfo";
import FriendTop3 from "../components/friends/FriendTop3";
function FriendPage({friend}){
    if(!friend){

        return(
            <p>No Users Found</p>
        )
    }    
    if(user){
    return(
        <div>
            <FriendInfo friend = {friend}/>
            <FriendPage friend = {friend}/>
        </div>
    )}
    



}
export default FriendPage