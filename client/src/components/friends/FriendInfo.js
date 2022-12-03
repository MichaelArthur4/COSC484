import { useState, useContext } from "react"
function FriendInfo({friend}){

    const user = {
        username: 'user_friend',
        url: "https://st3.depositphotos.com/7486768/17806/v/600/depositphotos_178065822-stock-illustration-profile-anonymous-face-icon-gray.jpg?forcejpeg=true",
        bio: 'This is the friends bio'
    }

    return(
        <div>
            <div>
                <h2>{user.username}</h2>
                <img src = {user.url} alt = "other" height = {200} width = {200}/>
                <button onClick = {{}} >Follow</button>
                <h3>Bio </h3>
                <p>{user.bio}</p>             
            </div>
        </div>
    )
}
export default FriendInfo