import { useContext } from "react"
import UserContext, {curUser, isLoggedIn} from "../context/UserContext"

function FuckingAroundPage(){
    
   const {curUser, isLoggedIn} = useContext(UserContext)

    return(
        <>
        {curUser && 
        <div>
            <h1>Hello</h1>
            <p>{curUser.username}</p>
        </div>}
        {!curUser && <p>Nobody logged in</p>}
        </>
    )}

export default FuckingAroundPage