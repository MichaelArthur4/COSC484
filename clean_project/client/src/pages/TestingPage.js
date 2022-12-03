import {useContext} from 'react'
import FriendInfo from '../components/friends/FriendInfo'
import UserContext from '../context/UserContext'

function TestingPage(){

    const {users, getUserList} = useContext(UserContext)

    console.log(users)
    if(!users){
        return(
            <>
            <p>No users found</p>
            <button onClick = {getUserList}>Find Users</button>
        </>)
    }
    if(users){  return(
        <div>We found users!
        {users.map((user) => (
            <>
            
                <h1>{user.username}</h1>
                <h2>{user.bio}</h2>
            
                <h1>---------------------------------</h1>
            </>
        ))}

        </div>
    ) }
}
export default TestingPage