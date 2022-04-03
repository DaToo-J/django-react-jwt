import React, {useContext, useState, useEffect } from 'react'
import AuthContext from '../context/AuthContext'
import useAxios from '../utils/useAxios'

const Home = () => {
    let { name, authTokens, logoutUser } = useContext(AuthContext)
    let [notes, setNotes] = useState([])

    let api = useAxios()

    useEffect(() => {
        getNotes()
    }, [])

    let getNotes = async() => {
        let response = await api.get('/api/notes/')
        if(response.status === 200){
            setNotes(response.data)
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
