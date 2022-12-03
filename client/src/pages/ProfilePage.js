import UserContext from "../context/UserContext"
import UserInfo from "../components/profile/UserInfo"
import Top3Artists from "../components/profile/Top3Artists"
import Top3Songs from "../components/profile/Top3Songs"
import PostList from "../components/PostList"
import { useContext } from "react"
import {useNavigate} from 'react-router-dom'
function ProfilePage(){
    const {curUser} = useContext(UserContext)
    const nav = useNavigate()
    if(curUser){
        return(
            <div>
                <h1>Profile Page</h1>
                <UserInfo />
                <Top3Artists />
                <Top3Songs />
                <PostList />
            </div>
            )}
    else{
        nav('/')
    }
}
export default ProfilePage