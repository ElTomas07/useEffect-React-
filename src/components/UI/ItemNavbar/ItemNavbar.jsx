import React from 'react'
import { NavLink } from 'react-router-dom'
import './ItemNavbar.css'
export const ItemNavbar = ({content,route}) => {
  return (
    <li className='liItems'><NavLink className='Items' to={route} >{content}</NavLink></li>
  )
}
