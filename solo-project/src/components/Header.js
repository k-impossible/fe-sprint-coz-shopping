import React from 'react'
import { Link } from 'react-router-dom'
import Nav from "./Nav";
export default function Header() {
    return(
        <div className='header-container'>
            <Link to="/">
             <div className='header-logo'>
                <img src='/images/logo.png' alt="logo"/>
                <h4>COZ Shopping</h4>
            </div>
            </Link>
            <div className='header-menu'>
                <img src='/images/menuBtn.png' alt="menuBtn"/>
                {/* <Nav/> */}
            </div>
        </div>
    )
}