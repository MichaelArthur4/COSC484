import FriendCard from "./FriendCard"
import UserContext from "../../context/UserContext"
import { AuthContext } from "../../context/AuthContext"
import {useContext, useState} from 'react'
//broken
function FriendList(){
    var arr = [1,2,3,4,5]
    const {curUser} = useContext(AuthContext)
    const {users, getUserList, getTargetUser, targetUser, getFollowing, following} = useContext(UserContext)
    const [followBool, setFollowBool] = useState(false)

    var user2 = []

    console.log(curUser.following)
    if(curUser.following){
        try{
            console.log(curUser._id)
            getFollowing(curUser._id)
        }
        catch{}
        if(following){
            console.log(following)
        }
    }
    //broken af fam
   /*  if(curUser.following){
        var arr = []
        for(var i = 0; i < curUser.following.length; i++){
            try{
                getTargetUser(curUser.following[i])
                /* if(targetUser){
                    console.log(targetUser)
                    user2.push(targetUser)}
                else{console.log('didnt push')} 
            }
            catch{}
            if(targetUser){
            console.log(targetUser)
            console.log('user2 ' + user2)}
        }
    } */
    if(curUser.following == false && followBool == false){
        try{
            getUserList()
            setFollowBool(true)
        }
        catch{

        }}
    for(const user in users){
        if(!user.username == curUser.username){
            user2.push(users[user])
        }
    }
    if(users && curUser.following == false){
            return(
                <>
                <h1>You're not following anyone! Here are some suggestions: </h1>
                {users.map((user) => (
                    <FriendCard friend = {user} isFriend={false}></FriendCard>
                ) )}
                </>
            )
        }
    else{
            return(<p>Error: could not fetch users</p>)
        }
    
    
}
  /*   return(
        <div className = 'friend-list'>
        
            {arr.map((idx) => (
                <FriendCard />
            ))}
        </div>
    )
 */

export default FriendList