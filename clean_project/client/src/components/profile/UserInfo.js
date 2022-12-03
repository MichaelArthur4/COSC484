import {FaEdit} from 'react-icons/fa'
import {useState, useContext} from 'react'
import UserContext from '../../context/UserContext'

function UserInfo(){

    const {curUser, editData} = useContext(UserContext)
    const [tempBio, setTempBio] = useState("")
    const [editBool,setEditBool] = useState(false)

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
        console.log('logged editdata')
    }

    var url1 = "https://st3.depositphotos.com/7486768/17806/v/600/depositphotos_178065822-stock-illustration-profile-anonymous-face-icon-gray.jpg?forcejpeg=true"
    //var name = "Default Name"
    //var bio = "This is the bio. I do not feel like adding anything in here right now."
    

    return(
        <div>
            <h2>{curUser.username}</h2>
            <img src = {url1} alt = "me" height = {200} width = {200}/>
            <h3>Bio {<button onClick = {onEdit} className = 'edit'>
                <FaEdit color = 'black' />
            </button>}</h3>
            {!editBool && <><p>{curUser.bio}</p> </>}
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