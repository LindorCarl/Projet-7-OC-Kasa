import React from 'react';
import { NavLink } from 'react-router-dom'; 
import Logo from "../../assets/LOGO.svg"

//Navlink ajoute une "class active" pour dire quel lien est actif.
//Ici Navlink est une autre fonctionnalité de "Link". 
function Navbar() {
    return (
        <nav className='nav'>
            <NavLink to ="/">
                <div className='nav_logo'>
                    <img src={Logo} alt='Logo'/>
                </div>
            </NavLink>
            <div className='nav_menu'>
                <NavLink to ="/">
                    <p>Accueil</p>
                </NavLink>
                <NavLink to ="/about">
                    <p>A Propos</p>
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;