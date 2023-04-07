import React from 'react'
import './Sidenavbar.css'

function Sidenavbar() {
  return (
    <nav className='sidenavbar'>
        <div className="sidenavbar-top">
            <ul>
                <li>Home</li>
                <li>Courses</li>
                <li>Trending</li>
                <li>Following</li>
                <li>Dashboard</li>
                <li>Discord</li>
                <li>Creator</li>
                <li>Feedback</li>
                <li>Tour</li>
            </ul>
        </div>
        <div className="sidenavbar-bottom">
            <ul>
                <li>logout</li>
            </ul>
        </div>
    </nav>
  )
}

export default Sidenavbar