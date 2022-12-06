import {FaEdit} from 'react-icons/fa'
import {useState, useContext, useEffect} from 'react'
import UserContext from '../../context/UserContext'
import { AuthContext } from '../../context/AuthContext'

function UserInfo(){

    
    const {curUser} = useContext(AuthContext)
    const {editData} = useContext(UserContext)
    const [tempBio, setTempBio] = useState("")
    const [editBool,setEditBool] = useState(false)
    const [bio, setBio] = useState(curUser.bio)
    const auth = useContext(AuthContext)

    useEffect(() => {
        auth.getCurrentUser(curUser._id)
        console.log('in use effect: ' +curUser)

        }
    , [])
    //need use effect or something to update values

    const onEdit = () => {
        setEditBool(!editBool)
    }

    const onCancel = () => {
        setEditBool(false)
    }

    const getTempBio = (e) => {
        setTempBio(e.target.value)
    }

    const changeBio = () => {
        setEditBool(false)
        editData({
            username: curUser.username,
            bio: tempBio
        })
        if(curUser._id != undefined){
            auth.getCurrentUser(curUser._id)
            setBio(tempBio)
            console.log('logged editdata')
        }
        
    }

    var url1 = "https://play.google.com/store/apps/details?id=cute.love.dp&hl=en_IE&gl=US"

    

    return(
        <div>
            <h2>{curUser.username}</h2>
            <img src = {curUser.profileUrl} alt = "me" height = {200} width = {200}/>
            <h3>Bio {<button onClick = {onEdit} className = 'edit'>
                <FaEdit color = 'black' />
            </button>}</h3>
            {!editBool && <><p>{bio}</p> </>}
            {editBool && 
                <>
                <input onChange = {getTempBio}  type = 'text'></input> <br></br>
                <button onClick = {changeBio}>Change</button>
                <button onClick = {onCancel}>Cancel</button>
                </>
            }
        </div>
    )
}

export default UserInfo