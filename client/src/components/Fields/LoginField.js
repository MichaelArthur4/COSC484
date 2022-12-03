
import {useNavigate, Link} from 'react-router-dom';


function LoginField(){

    return(
       <div className = "input">
            <h1>Login</h1>
            <form onSubmit = {{}}>
                <div className='input-group'>
                    <label>Username: </label><input onChange = {{}} name = 'uname' type = 'text' required></input> <br></br>
                    <label>Password: </label><input onChange = {{}} name = 'pw1' type = 'password' required></input><br></br>
                    <input type = 'submit'></input> <br></br>
                    <Link to='/signup'>Don't have an account? Sign up!</Link>
                </div>
            </form>
        </div>
    )
}
export default LoginField