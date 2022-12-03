import {createContext, useState, useEffect} from 'react'
import jwt_decode from 'jwt-decode'
import { AuthContext } from './AuthContext'
import { useContext } from 'react'
//the Provider allows access to variables inside provider... that's why your shit ain't work
const UserContext = createContext({ID: null, token: null, login: () => {}, logout: () => {}})

export const UserProvider = ({children}) => {
    
    const [user, setUser] = useState()
    const [token, setToken] = useState()
    const [username, setUsername] = useState()
    const [targetUser, setTargetUser] = useState()
    const [curUser, setCurUser] = useState(null)
    const [users, setUsers] = useState(null)

    const auth = useContext(AuthContext)
    //useEffect(()=> {
        //fetchUsers()
    //},[])


    const registerUser = async (newUser) => {
        const response = await fetch('/users/', {
            method: 'POST',
            headers: {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        const data = await response.json()
        console.log(data)

        setCurUser(data)
    } 

    //link to api
    /*const deleteUser = async(user) => {
        const response = await fetch('')
    }*/
    //maybe pass whole ass thing? not just id?
     const loginUser = async(userInfo) => {
        const response = await fetch('/users/login', {
            method: 'POST',
            headers: {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        try{
            const data = await response.json()
            console.log(data)
            //setToken(data.token)
            //setCurUser(data)
            console.log(data.id + "    " + data.token)
            //console.log(curUser)
            if(data != undefined){
                auth.login(data.id,data.token)}
                console.log("the login has been passed, " + data.username)
        }
        catch{
        }
    } 
    //
    function saveToken(){
        if(token != undefined){
        localStorage.setItem('token', token)
        console.log('token saved!')
        getUserIDFromToken()}
        else{
            console.log('the token was undefined sorry')
        }
    }

    function getUserIDFromToken(){
        var decoded = jwt_decode(token)
        console.log(decoded)
    }

    const logout = () => {
        setCurUser(null)
        setToken(null)
        localStorage.removeItem('data')
        console.log('user has been logged out')
    }

    //info is {username: ..., bio: ...}
    const editData = async(info) => {
        console.log('logged edit data in user context')
        const response = await fetch('/users/me', {
            method: 'PUT',
            headers: {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify(info)
        })
        console.log('logged after ')
        const data = await response.json()

        setCurUser(data)
        
        
        
    }
    const getUserList = async() => {
        const response = await fetch('/users/userlist', {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify()
        })
        const data = await response.json({message:'hi'})
        setUsers(data)
        console.log(data)
        
    }


    //info is {username: ..., post: ...}
    const addPost = async(info) => {
        const response = await fetch('/users/me/posts', {
            method: 'POST',
            headers: {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify(info)
        })
        console.log(info)
        const data = await response.json()

        setCurUser(data)
    }
    const getCurrentUser = async(_id) => {
        const response = await fetch('/users/me', {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(_id)
        })
        try{
            const data = await response.json()
            if(data){
                setCurUser(data)
            }
        }
        catch{

        }
            
        }
    

    const getTargetUser = async(username) => {
        const response = await fetch('/users/user', {
            method: 'GET',
            headers: {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify(username)
        })
        try{
        const data = await response.json()
        
        setCurUser(data)
        console.log('current user data: ' + curUser)}
        catch{}
    }

    /*const editUserInfo = async(userInfo) => {
        const response = await fetch('/user/', {
            method: 'PUT',
            headers: {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        const data = await response.json()
        console.log(data)
        setUser(data)*
    }*/
    
    //how to get from username
  

    return (
        <UserContext.Provider value = {{
            registerUser,
            loginUser,
            //logout,
            user,
            curUser,
            editData,
            addPost,
            getUserList, users,
            getTargetUser,
            getCurrentUser
        }}>
            {children}
        </UserContext.Provider>
    )
    }

export default UserContext