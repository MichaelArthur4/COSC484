import {createContext, useState, useEffect} from 'react'
import jwt_decode from 'jwt-decode'
import { AuthContext } from './AuthContext'
import { useContext } from 'react'
//the Provider allows access to variables inside provider... that's why your shit ain't work
const UserContext = createContext(/*{ID: null, token: null, login: () => {}, logout: () => {}}*/)

export const UserProvider = ({children}) => {
    
    const [user, setUser] = useState()
    const [token, setToken] = useState()
    const [username, setUsername] = useState()
    const [targetUser, setTargetUser] = useState()
    const [curUser, setCurUser] = useState(null)
    const [users, setUsers] = useState(null)

    const auth = useContext(AuthContext)

    const registerUser = async (newUser) => {
        const response = await fetch('/users/', {
            method: 'POST',
            headers: {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        try{
            const data = await response.json()
            
            if(data){
                auth.login(data.id,data.token)
            }

        }
        catch{

        }
        
    

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
            if(data != undefined){
                console.log(auth.login)
                auth.login(data.id,data.token)}
        }
        catch{
        }
    } 
    //
    function saveToken(){
        if(token != undefined){
        localStorage.setItem('token', token)
        getUserIDFromToken()}
        else{
        }
    }

    function getUserIDFromToken(){
        var decoded = jwt_decode(token)
    }

    const logout = () => {
        setCurUser(null)
        setToken(null)
        localStorage.removeItem('data')

    }

    //info is {username: ..., bio: ...}
    const editData = async(info) => {

        const response = await fetch('/users/me', {
            method: 'PUT',
            headers: {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify(info)
        })
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
        
        setCurUser(data)}
        catch{}
    }

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