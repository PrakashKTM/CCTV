import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    let [showbar, setshowbar] = useState(true)
    return (
        <div className='mynavbar container-fluid position-sticky top-0 d-sm-flex justify-content-between text-bg-primary align-items-center p-sm-3'>
            <h2 className='px-sm-3 px-md-5 py-3 py-sm-0' >Logo</h2>
            {showbar ? <i className='bi bi-list menubar d-sm-none' onClick={() => setshowbar(false)}></i>
                : <i className='bi bi-x menubar d-sm-none' onClick={() => setshowbar(true)}></i>}
            <ul className={`${showbar ? "d-none d-sm-flex px-sm-3 px-md-5" : "d-block d-sm-flex px-sm-3 px-md-5"}`}>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/menu"><li>Menu</li></NavLink>
                <NavLink to="/about"><li>About</li></NavLink>
                <NavLink to="/contact"><li>Contact</li></NavLink>
                <NavLink to="/enquiry"><li>Enquiry</li></NavLink>
            </ul>
        </div>
    )
}

export default Navbar