import { createContext, useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()
export default AuthContext;

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)

    let [loading, setLoading] = useState(true)

    let loginUser = async (e) => {
        e.preventDefault()
        let response = await fetch('http://localhost:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'username': e.target.username.value, 'password': e.target.password.value })
        })
        let data = await response.json()

        if(response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate('/')
        }else{
            console.log('something went wrong!');
        }
    }

    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/')
    }

    let contextData = {
        user: user,
        setUser: setUser,
        authTokens: authTokens,
        setAuthTokens: setAuthTokens,
        loginUser: loginUser,
        logoutUser: logoutUser,
    }

    useEffect(() => {
        if(authTokens){
            setUser(jwt_decode(authTokens.access))
        }
        setLoading(false)
        
    }, [authTokens, loading])

    return (
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )
}