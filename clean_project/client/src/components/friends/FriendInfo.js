import { useState, useContext } from "react"
import UserContext from '../../context/UserContext'
function FriendInfo({user}){

    const {curUser} = useContext(UserContext)

    const follow = () => {
        //create function that takes ids from cur and target and post target id to current's friends
    }
    var url1 = "https://st3.depositphotos.com/7486768/17806/v/600/depositphotos_178065822-stock-illustration-profile-anonymous-face-icon-gray.jpg?forcejpeg=true"
    return(
        <div>
            <div>
                <h2>{user.username}</h2>
                <img src = {url1} alt = "other" height = {200} width = {200}/>
                <button onClick = {follow} >Follow</button>
                <h3>Bio </h3>
                <p>{user.bio}</p>             
            </div>
        </div>
    )
}
export default FriendInfo