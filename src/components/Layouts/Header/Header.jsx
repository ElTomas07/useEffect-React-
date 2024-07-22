import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { ItemNavbar } from '../../UI/ItemNavbar/ItemNavbar'
import './Header.css'

export const Header = () => {
  return (
    <header className='header'>
        <Navbar>
            <ItemNavbar route="/" content='Counter'/>
            <ItemNavbar route="/active" content='Active'/>
            <ItemNavbar route="/digitalClock" content='Digital Clock'/>
            <ItemNavbar route="/timer" content='Timer'/>
        </Navbar>
    </header>
  )
}
