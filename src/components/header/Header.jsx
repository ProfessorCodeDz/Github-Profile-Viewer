import React from 'react'
import './header.css';

export default function Header() {
  return (
    <header>
        <div className="logo">Riad.Z</div>
        <ul className=''>
            <li>  Linkedin</li>
            <li>Twitter</li>
            <li>Github</li>
        </ul>
        <div className="dark-mode"></div>
    </header>
  )
}
