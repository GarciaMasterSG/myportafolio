import { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Curriculum from './Pages/Curriculum.jsx'
import Profile from './Pages/Profile.jsx' 



function App() {
    return(
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Curriculum' element={<Curriculum/>}></Route>
            <Route path='/Profile' element={<Profile/>}></Route>
        </Routes>
    </BrowserRouter>
    )
}

export default App
