import UserContext from "../context/UserContext"
import UserInfo from "../components/profile/UserInfo"
import Top3Artists from "../components/profile/Top3Artists"
import Top3Songs from "../components/profile/Top3Songs"
import PostList from "../components/PostList"
import { useContext } from "react"
import {useNavigate} from 'react-router-dom'
import { AuthContext } from "../context/AuthContext"

function ProfilePage(){

    const {curUser} = useContext(AuthContext)
    const nav = useNavigate()
    if(curUser){
        return(
           <div>
                <h1>Profile Page</h1>         
                <UserInfo user = {user}/>
                <div class="feed">
                <Top3Artists user = {user}/>
                <Top3Songs user = {user}/>
                </div>                       
                <PostList user = {user}/>
            </div>

            )}
    else{
        <p>no one signed in</p>
    }
}
export default ProfilePage
