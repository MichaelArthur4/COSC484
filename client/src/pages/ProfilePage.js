
import UserInfo from "../components/profile/UserInfo"
import Top3Artists from "../components/profile/Top3Artists"
import Top3Songs from "../components/profile/Top3Songs"
import PostList from "../components/PostList"
import { useContext } from "react"
import {useNavigate} from 'react-router-dom'


function ProfilePage({user}){


    if(user){
        return(
            <div>
                <h1>Profile Page</h1>
                <UserInfo user = {user}/>
                <Top3Artists user = {user}/>
                <Top3Songs user = {user}/>
                <PostList user = {user}/>
            </div>
            )}
    else{
        <p>no one signed in</p>
    }
}
export default ProfilePage