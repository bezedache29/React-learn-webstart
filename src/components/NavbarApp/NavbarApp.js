import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavbarApp.module.css'

const NavbarApp = () => {

  return (
    <div className={styles.navbar}>
      <NavLink exact="true" to='/' className={({ isActive }) => (isActive ? styles.active : styles.inactive)} >Home</NavLink>
      <br />
      <NavLink to='/posts' className={({ isActive }) => (isActive ? styles.active : styles.inactive)} >All Posts</NavLink>
      <br />
      <NavLink to='/new' className={({ isActive }) => (isActive ? styles.active : styles.inactive)} >New Post</NavLink>
    </div>
  )
};

export default NavbarApp
