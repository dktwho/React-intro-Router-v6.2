import React from 'react'
import {  NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
       {/*  example with className for NavLink
      <NavLink  className={({isActive}) => isActive ? 'activeLink': 'link'} to="." end>Home</NavLink> 
      <NavLink  className={({isActive}) => isActive ? 'activeLink': 'link'} to="about">About</NavLink>
      <NavLink  className={({isActive}) => isActive ? 'activeLink': 'link'} to="contacts">Contacts</NavLink>
       */}

       {/* use style for NavLink */}
      <NavLink  style={({isActive}) => isActive ? {color: 'lightgreen', textDecoration: 'none'} : {}} to="." end>Home</NavLink>
      <NavLink  style={({isActive}) => isActive ? {color: 'lightgreen', textDecoration: 'none'} : {}} to="about">About</NavLink>
      <NavLink  style={({isActive}) => isActive ? {color: 'lightgreen', textDecoration: 'none'} : {}}to="contacts">Contacts</NavLink>
    </nav>
  )
}

export default Menu
