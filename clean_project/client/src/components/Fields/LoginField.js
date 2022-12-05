import {useState, useContext} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import UserContext from '../../context/UserContext';


function LoginField(){

    const {loginUser} = useContext(UserContext) 

    const [username, setUsername] = useState('')

    const [password, setPassword] = useState('')

    const nav = useNavigate()

    const getUsername = (e) => {
        setUsername(e.target.value)
    }

    const getPassword = (e) => {
        setPassword(e.target.value)
    }
    const onS = (e) => {
        e.preventDefault()

        const user = {
            username,
            password
        }

        loginUser(user)

        nav('/')
    }


    return(
       <div className = "input">
            <h1>Login</h1>
            <form onSubmit = {onS}>
                <div className='input-group'>
                    <label>Username: </label><input onChange = {getUsername} name = 'uname' type = 'text' required></input> <br></br>
                    <label>Password: </label><input onChange = {getPassword} name = 'pw1' type = 'password' required></input><br></br>
                    <input type = 'submit'></input> <br></br>
                    <Link to='/signup'>Don't have an account? Sign up!</Link>
                </div>
            </form>
        </div>
    )
}
export default LoginField