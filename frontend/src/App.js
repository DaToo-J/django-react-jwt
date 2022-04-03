import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute.jsx'
import { AuthProvider } from './context/AuthContext'
import Login from "./pages/login.js";
import Home from "./pages/home.js";
import Header from "./pages/header.js";

function App() {
    return (
        <div>
            <Router>
                <AuthProvider>
                    <Header />
                    <Routes>
                        <Route exact path='/' element={<PrivateRoute/>}>
                            <Route exact path='/' element={<Home/>}/>
                        </Route>
                        {/* <Route exact path='/register' element={<Register />}/> */}
                        <Route exact path='/login' element={<Login />}/>
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    )
}

export default App;