
//do the whole username shit
function SignupField(){

    
    return(
        <div>
            <h1>Signup</h1>
            <form onSubmit = {{}}>
                <label>Enter Username: </label><input onChange = {{}} name = 'uname' type = 'text' required></input> <br></br>
                <label>Enter Password: </label><input onChange = {{}} name = 'pw1' type = 'password' required></input><br></br>
                <label>Re-enter Password: </label><input onChange = {{}} name = 'pw2' type = 'password' required></input><br></br>
                <input type = 'submit'></input> <br></br>
            </form>
        </div>
    )
}
export default SignupField