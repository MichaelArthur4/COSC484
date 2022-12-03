import {curUser, editData} from '../../context/UserContext'
import UserContext from "../../context/UserContext"
import {useState} from 'react'

function SettingsField(){
    //need to go back and see if feasible to change username
    //need to find out how to upload images
    //find password verification
    const [editPass, setEditPass] = useState(false)
    const [oldPass, setOldPass] = useState('')
    const [newPass, setNewPass] = useState('')
    const [newPass1, setNewPass1] = useState('')

    const setEdit = () => {
        setEditPass(!editPass)
    }
    const setText =(e, set) => {
        set(e.target.value)
    }

    return(
        <div>
            <label>Change Username</label>
            <button onClick = {{}}>change</button> <br></br>
            <label>Change Password</label>
            <button onClick = {setEdit}>change</button> <br></br>
            {editPass && 
                <form onSubmit = {{}}>
                    <label>Old password: </label><input onChange = {{}} type = 'password' required /> <br></br>
                    <label>New password: </label><input type = 'password' required /> <br></br>
                    <label>Reenter new password: </label><input type = 'password' required /><br></br>
                    <label>{oldPass}</label>
                </form>}
            <label>Delete Account</label>
            <button onClick = {{}}>Delete</button>
        </div>
    )
}
export default SettingsField