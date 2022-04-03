import React, {useContext, useState, useEffect } from 'react'
import AuthContext from '../context/AuthContext'


const Home = () => {
    let { name, authTokens, logoutUser } = useContext(AuthContext)
    let [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, [])

    let getNotes = async() => {
        let response = await fetch('http://localhost:8000/api/notes/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()
        if(response.status === 200){
            setNotes(data)
        }else if(response.statusText === 'Unauthorized'){
            logoutUser()
        }

    }
    return (
        <div>
            <p>Welcome {name}~~!</p>
            <ul>
                {notes.map(note => (
                    <li key={note.id}>{note.body}</li>
                ))}
            </ul>
        </div>
    )
}

export default Home
