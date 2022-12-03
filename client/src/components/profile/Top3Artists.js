import { useState } from 'react'
import {FaEdit} from 'react-icons/fa'

function Top3Artists({user}){

    //need a curUser
    const [editBool,setEditBool] = useState(false)

    const onEdit = () => {
        setEditBool(!editBool)
    }


    
    return(
        <div>
            <h3>Top 3 Artists {
                <button onClick = {onEdit} className = 'edit'>
                <FaEdit color = 'black' />
            </button>
            } </h3>
            <ol>

                {!editBool && 
                <ol>
                {user.topartists.map((song) => (
                    <li>{song}</li>
                ))}
                </ol>
                }
                {editBool && 
                <>
                <li>1. {<input onChange = {{}}  type = 'text' placeholder={{}}></input>}</li>
                <li>2. {<input onChange = {{}}  type = 'text'placeholder={{}}></input>}</li>
                <li>3. {<input onChange = {{}}  type = 'text'placeholder={{}}></input>}</li>
                </>}
            </ol>
            {editBool && 
            <>
                <button onClick = {{}} >Change</button>
                <button onClick = {onEdit}>Cancel</button>
            </>}

            
        </div>
    )
}
export default Top3Artists