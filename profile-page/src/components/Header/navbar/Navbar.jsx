import React from 'react'
import './Navbar.css'
import {FaListUl,FaRegCompass,FaChevronDown,FaSearch,FaSlidersH,FaRegBell,FaChrome} from "react-icons/fa"

function Navbar() {
  return (<>
    <nav>
        <div className='navbar'>
            <div className="left-side">
                <span className='Listul'><FaListUl/></span>
                <span>
                    <span className='cipherschool-logo'>
                        <img src='https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png' alt='cipherschools'/>
                    </span>
                    <span>CipherSchools</span>
                </span>
                <span className='Browse=-navigation'>
                    <FaRegCompass/>
                    <span>Browse</span>
                    <FaChevronDown/>
                </span>
            </div>
            <div className="right-side">
                <span className='searchbox'>
                    <FaSearch/>
                    <input type="text" placeholder='Search and Learn' className='search-learnbox'/>
                    <FaSlidersH/>
                </span>
                <span className="notibell"><FaRegBell/></span>
                <FaChrome/>
                <FaChrome/>
                <FaChrome/>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar