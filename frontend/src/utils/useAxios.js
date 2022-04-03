import jwt_decode from 'jwt-decode'
import axios from 'axios';
import dayjs from 'dayjs'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const baseURL = 'http://127.0.0.1:8000'

const useAxios = () => {
    const { authTokens, setUser, setAuthTokens } = useContext(AuthContext)

    const axiosInstance = axios.create({
        baseURL,
        headers: {
            Authorization: `Bearer ${authTokens?.access}`
        }
    })

    axiosInstance.interceptors.request.use(async req => {
        // get the user
        const user = jwt_decode(authTokens.access)
        // check the user if is expired
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
        
        // the user is not expired
        if(!isExpired){
            return req
        }
        // the user is expired, and send the refresh token to backend
        const response = await axios.post(`${baseURL}/api/token/refresh/`, {
            refresh: authTokens.refresh
        })
        // refresh localStorage's token
        localStorage.setItem('authTokens', JSON.stringify(response.data))

        setAuthTokens(response.data)
        setUser(jwt_decode(response.data.access))

        req.headers.Authorization = `Bearer ${response.data.access}`

        return req
    })

    return axiosInstance
}

export default useAxios;