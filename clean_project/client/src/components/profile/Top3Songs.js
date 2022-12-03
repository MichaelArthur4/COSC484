import {FaEdit} from 'react-icons/fa'
import {useState, useContext} from 'react'
import UserContext from '../../context/UserContext'
import {editData, curUser} from '../../context/UserContext' 
function Top3Songs(){

    const [editBool,setEditBool] = useState(false)
    const [temp1,setTemp1] = useState("")
    const [temp2,setTemp2] = useState("")
    const [temp3,setTemp3] = useState("")
    const {curUser,editData} = useContext(UserContext)

    const [t1, setT1] = useState(curUser.topsongs[0])
    const [t2, setT2] = useState(curUser.topsongs[1])
    const [t3, setT3] = useState(curUser.topsongs[2])

    const changeTemp1 = (e) =>{
        setTemp1(e.target.value)
    }
    const changeTemp2 = (e) =>{
        setTemp2(e.target.value)
    }
    const changeTemp3 = (e) =>{
        setTemp3(e.target.value)
    }

    const changeSongs = () => {
        if(temp1 != ""){ setT1(temp1)}
        else{
            setTemp1(t1)
        }
        if(temp2 != ""){ setT2(temp2)}
        else{
            setTemp2(t2)
        }
        if(temp3 != ""){ setT3(temp3)}
        else{
            setTemp3(t3)
        }

        setEditBool(!editBool)

        var changes = {
            username :curUser.username,
            topsongs: [`${temp1}`, `${temp2}`, `${temp3}`]
        }
        editData(changes)

    }
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
                {curUser.topsongs.map((song) => (
                    <li>{song}</li>
                ))}
            </ol>
                }
                {editBool && 
                <>
                <li>1. {<input onChange = {changeTemp1}  type = 'text' placeholder={temp1}></input>}</li>
                <li>2. {<input onChange = {changeTemp2}  type = 'text'placeholder={temp2}></input>}</li>
                <li>3. {<input onChange = {changeTemp3}  type = 'text'placeholder={temp3}></input>}</li>
                </>}
            </ol>
            {editBool && 
            <>
                <button onClick = {changeSongs} >Change</button>
                <button onClick = {onEdit}>Cancel</button>
                
            </>
            }
            
            
        </div>
    )
}
export default Top3Songs