import { useContext} from 'react'
import {Link, useNavigate } from 'react-router-dom'


function Header({user}) {

    const headerStyles = {
        backgroundColor: 'gold',
        color:'black'}

    return (
        <header style = {headerStyles}>
            <div className = "container">
                <Link to= '/'>
                    <h2>Tu Tunes    </h2>
                </Link>
                <Link to= '/main'>
                    <h5>Main     </h5>
                </Link>
                <Link to ='/profile'>
                    <h5>Profile    </h5>
                </Link>
                <Link to ='/signup'>
                    <h5>SignUp     </h5>
                </Link>
                <Link  to = '/friendslist'>
                    <h5>FriendsList      </h5>
                </Link>
                <Link to ='/login'>
                     <h5>Login</h5>
                </Link>

                {user && <p>Welcome {user.username}</p> }
            </div>
        </header>
    )
}

export default Header
