import { useState, useContext } from "react"
import Card from "../shared/Card"
import {v4 as uuid} from 'uuid'

function PostForm({user}){

    //need to update

    return(
        <Card>
        <form onSubmit = {{}}>
            <h2>Create a post</h2>
            <input onChange = {{}} type = 'text' placeholder = 'Song Name' value = {''} /><br />
            <input onChange = {{}} type = 'text' placeholder = 'Song Review' value = {''} /> <br />
            <button onClick = {{}}>Post</button>
        </form>
        </Card>
    )
}
export default PostForm