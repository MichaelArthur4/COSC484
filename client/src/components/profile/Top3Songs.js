import {FaEdit} from 'react-icons/fa'
import {useState} from 'react'
function Top3Songs({user}){
    
    const [editBool, setEditBool] = useState(false)
    const onEdit = () => {
        setEditBool(!editBool)
    }
    //Add edit functionaliy
    return(
        <div>
            <h3>Top 3 Songs {
                    <button onClick = {onEdit} className = 'edit'>
                        <FaEdit color = 'black' />
                    </button>
                }
            </h3>
            <ol>
            {!editBool && 
                <ol>
                {user.topsongs.map((song) => (
                    <li>{song}</li>
                ))}
            </ol>
                }
                {editBool && 
                <>
                <li>1. {<input onChange = {{}}  type = 'text' placeholder={''}></input>}</li>
                <li>2. {<input onChange = {{}}  type = 'text'placeholder={''}></input>}</li>
                <li>3. {<input onChange = {{}}  type = 'text'placeholder={''}></input>}</li>
                </>}
            </ol>
            {editBool && 
            <>
                <button onClick = {{}} >Change</button>
                <button onClick = {onEdit}>Cancel</button>
                
            </>
            }
            
            
        </div>
    )
}
export default Top3Songs