import { BrowserRouter,Route, Routes } from "react-router-dom"
import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage'
import ErrorPage from '../pages/ErrorPage'
import LoginPage from '../pages/LoginPage'

export const Router = () => {
    return(
    <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}></Route>
          <Route path="profile/:name" element={<ProfilePage/>}></Route>
          <Route path="*" element={<ErrorPage/>}></Route>
          <Route path='/loginPage' element={<LoginPage/>}></Route>
        
        </Routes>

    </BrowserRouter>
)}