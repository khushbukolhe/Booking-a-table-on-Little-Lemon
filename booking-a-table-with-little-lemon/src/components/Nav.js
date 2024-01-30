import { useState } from 'react';
import Logo from '../images/Logo .svg'

const Nav =()=>{

const [menuState, setMenuState] = useState(false);

const toggleMenu =()=>{
    setMenuState(!menuState);
}


    return(
        <nav className='navbar'>
        <a>
            <img src={Logo}></img>
        </a>

        <div className='menu-icon' onClick={toggleMenu}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>

        </div>
        <ul className={`nav-links ${menuState? 'visible': ""}`}>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/'>About</a>
            </li>
            <li>
                <a href='/'>Services</a>
            </li>
            <li>
                <a href='/'>Menu</a>
            </li>
            <li>
                <a href='/'>Reservations</a>
            </li>
            <li>
                <a href='/booking'>Order Online</a>
            </li>
            <li>
                <a href='/'>Login</a>
            </li>
        </ul>
        </nav>

    )
}

export default Nav;