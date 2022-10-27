import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <header >
            <div class="flex">
                <nav>
                    <NavLink to='/' exact>
                        Home
                    </NavLink>
                    <NavLink to='/about'>
                        About
                    </NavLink>
                    <NavLink to='/services'>
                        Services
                    </NavLink>
                    <NavLink to='/projects'>
                        Projects
                    </NavLink>
                    <NavLink to='contact'>
                        Contact
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}