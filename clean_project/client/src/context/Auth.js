import { useState, useCallback, useEffect, useContext } from 'react';
import UserContext from './UserContext';
import jwt_decode from 'jwt-decode'

export const Auth = () =>  {

    const [token, setToken] = useState(false);
    const [ID, setID] = useState(false);
    const [curUser, setCurUser] = useState()
    const [loggedIn, setLogged] = useState(false)

    const login = useCallback((id, token) => {
        console.log(token)
        setToken(token);    
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
                decodeToken()
              }
              catch{}
            } 
        
        
          localStorage.setItem('data',
          JSON.stringify({
            ID: id,
            token: token,
          })

          
        );
        
      },[]);

      const decodeToken = () => {
          var decoded = jwt_decode(token)
          getCurrentUser(decoded)
      
      }
      //just get whole ass user from the get
      const getCurrentUser = async(id) => {
        const response = await fetch('/users/me', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({id: id})
        })
        try{
            const data = await response.json()
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
          login(storedData.ID, storedData.token);
          
        }
      }, [login]);
      return {token, login, logout, ID, curUser, getCurrentUser};

      
}