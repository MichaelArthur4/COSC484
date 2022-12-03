import {FaEdit} from 'react-icons/fa'
import {useState, useContext} from 'react'

function UserInfo(
    {user}
){


    const [editBool,setEditBool] = useState(false)

    const onEdit = () => {
        setEditBool(!editBool)
    }

    const onCancel = () => {
        setEditBool(false)
    }




    var url1 = "https://st3.depositphotos.com/7486768/17806/v/600/depositphotos_178065822-stock-illustration-profile-anonymous-face-icon-gray.jpg?forcejpeg=true"
    

    return(
        <div>
            <h2>{user.username}</h2>
            <img src = {user.url} alt = "me" height = {200} width = {200}/>
            <h3>Bio {<button onClick = {onEdit} className = 'edit'>
                <FaEdit color = 'black' />
            </button>}</h3>
            {!editBool && <><p>{user.bio}</p> </>}
            {editBool && 
                <>
                <input onChange = {{}} type = 'text'></input> <br></br>
                <button onClick = {{}}>Change</button>
                <button onClick = {{}}>Cancel</button>
                </>
            }
        </div>
    )
}

export default UserInfo