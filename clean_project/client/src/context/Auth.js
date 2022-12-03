import { useState, useCallback, useEffect, useContext } from 'react';
import UserContext from './UserContext';
import jwt_decode from 'jwt-decode'

export const Auth = () =>  {

    const [token, setToken] = useState(false);
    const [ID, setID] = useState(false);
    const [curUser, setCurUser] = useState()
    const [loggedIn, setLogged] = useState(false)

    const login = useCallback((id, token) => {
        setToken(token);
        console.log(id)
        console.log(token)
        console.log('auth login! ')
        //setCurUser(id);
        localStorage.setItem(
          'data',
          JSON.stringify({
            ID: id,
            token: token,
          })
        );
      },[]);

      const decodeToken = () => {
          var decoded = jwt_decode(token)
          console.log(decoded)
          getCurrentUser(decoded)
      
      }
      //just get whole ass user from the get
      const getCurrentUser = async(id) => {
        console.log('getcurrent user ' + id)
        const response = await fetch('/users/me', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(id)
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
        localStorage.removeItem('data');
      }, []);


      useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('data'));
        if (
          storedData &&
          storedData.token
        ) {
          login(storedData.userId, storedData.token);
          if(token){ try{
            decodeToken(token)
            console.log('token decoded')}
            catch{}}
          console.log('use effect getting called?')
        }
      }, [login]);
      return {token, login, logout, ID, curUser};

      
}
/* if(token){
  try{
  decodeToken(token)
  console.log('token decoded')}
  catch{}} */