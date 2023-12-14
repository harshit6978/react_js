import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';


function Navbar() {

    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <h2 class="navbar-brand" href="#">Navbar</h2>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to={'/'} class="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/About'} class="nav-link" href="#">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/Contact'} class="nav-link" href="#">Contact us</Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/Menu'} class="nav-link" href="#">Menu</Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/Service'} class="nav-link">Service</Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/Gallary'} class="nav-link">Gellary</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
