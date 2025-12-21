import { BrowserRouter, Routes,Route } from "react-router-dom"
import UserLayout from "../Layouts/UserLayout"
import HomePage from "./Components/UserPage/LandingPage/HomePage"
import About from "./Components/UserPage/LandingPage/About"
import { ToastContainer } from "react-toastify";



function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer position="top-center" autoClose={3000} />
      <Routes>
        <Route path="/" element={<UserLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="about" element={<About/>}/>      
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
