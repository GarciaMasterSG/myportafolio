import {Link} from 'react-router-dom'
import Menu from '../Images/menu.png'
import './Navbar.css'
import Logo from '../Images/Logo.png'
import Close from '../Images/close.png'
import { useState } from 'react'

function Navbar(){
    const [isOpen, setisOpen] = useState(false)

    return(
        <nav>
            <div id='menu' onClick={() => setisOpen(true)}>
                <img src={Menu} alt="" />
            </div>
            {isOpen && (<div id='mobilemenu'>
                <img src={Close} alt="" onClick={() => setisOpen(false)} />
                <Link className='Link' to="/" onClick={() => setisOpen(false)}> Home </Link>
                <Link className='Link' to="/Curriculum" onClick={() => setisOpen(false)}> Curriculum </Link>
                <Link className='Link' to="/Profile" onClick={() => setisOpen(false)}> Contact </Link>
            </div>)}
            <div id='normalmenu'>
                <img src={Logo} alt="" id='Logo'/>
                <div id='links'>
                    <Link className='Link' to="/"> Home </Link>
                    <Link className='Link' to="/Curriculum"> Curriculum </Link>
                    <Link className='Link' to="/Profile"> Contact </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar