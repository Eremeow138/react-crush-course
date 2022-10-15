import React from "react";
import logoImage from '../../assets/img/logo.svg'
import { menu } from "./menu";
import {Link} from "react-router-dom"

import styles from './Header.module.scss'

const Header = () => {
  return <div className={styles.header}>
    <div className={styles.logo} >
      <img src={logoImage} alt="icon" style={{width: '40px'}} />
    </div>
    <div className={styles.wrapper}>
      <ul className={styles.menu}>
        {menu.map((item, idx) => (
          <li key={`menu item ${idx}`}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <div className={styles['buttons']}>
        <button className={styles['login']}>Login</button>
        <button className={styles['sign-up']}>Sign up</button>
      </div>
    </div>
  </div>
}

export default Header