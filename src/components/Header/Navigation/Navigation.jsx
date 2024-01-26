import React from "react";
import styles from "./Navigation.module.css";
import profileIcon from "../../../assets/img/user.svg";
import messageIcon from "../../../assets/img/messages.svg";
import settingsIcon from "../../../assets/img/settings.svg";
import themeIcon from "../../../assets/img/day-night.svg";
import notificationIcon from "../../../assets/img/notification.svg";
import searchIcon from '../../../assets/img/love-hearts.svg'
import { NavLink } from "react-router-dom";
import MobileMenuButton from "./MobileMenu/MobileMenuButton";

function Navigation() {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.activelink : '')}>
            <img src={searchIcon} alt="profile" />
            <span>Пошук</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? styles.activelink : '')}>
            <img src={profileIcon} alt="profile" />
            <span>Моя сторінка</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/messages' className={({ isActive }) => (isActive ? styles.activelink : '')}>
            <img src={messageIcon} alt="message" />
            <span>Повідомлення</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='notifications' className={({ isActive }) => (isActive ? styles.activelink : '')}>
            <img src={notificationIcon} alt="message" />
            <span>Сповіщення</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='settings' className={({ isActive }) => (isActive ? styles.activelink : '')}>
            <img src={settingsIcon} alt="settings" />
            <span>Налаштування</span>
          </NavLink>
        </li>
        <li>
          <NavLink>
            <img src={themeIcon} alt="theme" />
          </NavLink>
        </li>
        <li className={styles.mobile}>
          <MobileMenuButton/>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
