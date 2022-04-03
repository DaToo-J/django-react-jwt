import axios from 'axios';
import jwt_decode from 'jwt-decode'
import dayjs from 'dayjs'

const baseURL = 'http://127.0.0.1:8000'

// check if has token
let authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null

const axiosInstance = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${authTokens?.access}`
    }
})

axiosInstance.interceptors.request.use(async req => {
    // check if token is existed
    // if not, add it to the headers
    if(!authTokens){
        authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
        req.headers.Authorization = `Bearer ${authTokens?.access}`
    }

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
    req.headers.Authorization = `Bearer ${response.data.access}`

    return req
})

export default axiosInstance;