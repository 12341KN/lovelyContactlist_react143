import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-blue bg-blue py-2'>
            <div className='container-fluid'>
                <Link to='/' className='navbar-brand ml-5'> Lovely Kanth Contact List App</Link>
            </div>
        </nav >
    )
}

export default Navbar