import { useState, useCallback, useEffect, useContext } from 'react';
import UserContext from './UserContext';
import jwt_decode from 'jwt-decode'

export const Auth = () =>  {
console.log("!!!!!!!!!!!!!!")
    const [token, setToken] = useState(false);
    const [ID, setID] = useState(false);
    const [curUser, setCurUser] = useState()
    const [loggedIn, setLogged] = useState(false)

    const login = useCallback((id, token) => {
      console.log('login from register in login')
        setToken(token);
        console.log({token});
        console.log('auth login! ' + id);
        if(token == null)
        {
          window.alert("Invalid username or password.")
        }
         if(id){
            try{
              getCurrentUser(id)
            }
            catch{
  
            }
          }
            else{
              try{
                console.log('decoding token')
                decodeToken()
              }
              catch{}
            } 
        
        //setCurUser(id);
        //localStorage.setItem('token', token);
        
          localStorage.setItem('data',
          JSON.stringify({
            ID: id,
            token: token,
          })

          
        );
        
      },[]);

      const decodeToken = () => {
          var decoded = jwt_decode(token)
          console.log('this is decoded running ' +decoded)
          getCurrentUser(decoded)
      
      }
      //just get whole ass user from the get
      const getCurrentUser = async(id) => {
        console.log('getcurrent user ' + id)
        console.log(JSON.stringify({id: id}))
        const response = await fetch('/users/me', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({id: id})
        })
        try{
            const data = await response.json()
            console.log(data + ' is the data!')
            if(data){
                setCurUser(data)
                console.log(curUser)
            }
        }
        catch{

        }
            
        }

      const logout = useCallback(() => {
        setToken(null);
        setID(null);
        setCurUser(null);
        localStorage.removeItem('data');
      }, []);


      useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem(/*'token'*/'data'));
        if (
          storedData &&
          storedData.token
        ) {
          console.log('stored data: ' + storedData.ID + ', ' + storedData.token)
          login(storedData.ID, storedData.token);
          
        }
      }, [login]);
      return {token, login, logout, ID, curUser};

      
}
/* if(token){
  try{
  decodeToken(token)
  console.log('token decoded')}
  catch{}} */


  /* if(){
            try{
              getCurrentUser(id)
            }
            catch{
  
            }
          }
            else{
              try{
                decodeToken()
              }
              catch{}
            } */