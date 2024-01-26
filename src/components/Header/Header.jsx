import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/img/dt-logo.png'
import Navigation from './Navigation/Navigation'

function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.logo}>
            <img src={logo} alt="logo" />
        </div>
        <div className={styles.navigation}>
          <Navigation/>
        </div>
    </div>
  )
}

export default Header