import React from 'react'
import logo from '../src/images/logo.png'

export default function Header() {
    return (
        <header className='header'>
            <div className='container-fluid'>
                <a href="/" className='site-logo'><img src={logo} /></a>
            </div>
        </header>
    )
}
