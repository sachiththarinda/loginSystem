import React from 'react'

import { Link } from 'react-router-dom'
import Logout from './logout'
import { logoutAction } from '../../container/action'
 import { useDispatch } from 'react-redux'

export default function Header() {

    const dispatch = useDispatch()

    const logout=()=>{
        dispatch(logoutAction());
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light primary-gradient shadow">
                <Link className="nav-link brand mx-auto" to="/"  >
                <h5 className="m-0">MERN stack application</h5>
                </Link>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false">
                <i class="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="me-auto"></div>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                           <Logout onLogout={logout}></Logout>
                        </li>
                    </ul>  
                 </div>
            </nav>
           
            </header>
    )
}