import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login/Login"
import Profile from "../pages/Profile/Profile"
import ProtectedRoute from "../components/ProtectedRoute"

const RoutesVN = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/profile-user" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            {/* <Route path="*" element={<NotFound/>} /> */}
       </Routes>
        </BrowserRouter>
    )
}
export default RoutesVN;