import React from 'react'
import Navbar from './navbar/Navbar'
import Sidenavbar from './sidenavbar/Sidenavbar'
import Usercontent from '../usercontent/Usercontent'


function Header() {
  return (
    <header>
        <Navbar/>
        <div style={{display:"flex"}}>
        <Sidenavbar/>
        <Usercontent/>
        </div>
    </header>
  )
}

export default Header