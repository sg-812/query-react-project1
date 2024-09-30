import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/rqusers">RqUsers</Link></li>
            <li><Link to="/rqusers2">RqUsers2</Link></li>
        </ul>
    </nav>
  )
}

export default Header