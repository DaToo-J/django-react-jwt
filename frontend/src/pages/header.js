import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'

const Header = () => {
    let { user, logoutUser } = useContext(AuthContext)
    return (
        <div>
            <Link to='/'>Home</Link>
            <span> | </span>
            
            {user ? (<p onClick={logoutUser}>Logout</p>) : (<Link to='/login'>Login</Link>)}
            
            {user && <p>{user.username}</p>}
            
        </div>
    )
}

export default Header
