import { useContext} from 'react'
import {Link, useNavigate } from 'react-router-dom'
import UserContext from '../context/UserContext'
import { AuthContext } from '../context/AuthContext'

function Header() {

    //const {isLoggedIn, logout} = useContext(UserContext)
    //const nav = useNavigate()
    const {userId, token, logout,curUser} = useContext(AuthContext)
    const {loginBool} = useContext(UserContext)
    const headerStyles = {
        backgroundColor: 'gold',
        color:'black'}


    /*const logOut = (e) => {
        logout()
        nav('/')
    }

    const login =(e) => {
        nav('/')
    }*/

    return (
        <header style = {headerStyles}>
            <div className = "container">
                <Link to= '/'>
                    <h2>Tu Tunes</h2>
                </Link>
                <Link to= '/main'>
                    <h5>main</h5>
                </Link>

                {curUser ? <p>Welcome {curUser.username}</p> : <p> No user signed in</p>}
                {token ? <button onClick = {logout}>Logout</button> : <button>login</button>}
            </div>
        </header>
    )
}

export default Header