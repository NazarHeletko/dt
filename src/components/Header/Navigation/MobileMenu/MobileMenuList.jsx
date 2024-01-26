import React from "react";
import styles from "./MobileMenuList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setMobileMenuClose } from "../../../../store/generalSlice";
import {NavLink } from "react-router-dom";
import {motion, AnimatePresence} from'framer-motion'
import searchIcon from "../../../../assets/img/love-hearts.svg";
import profileIcon from "../../../../assets/img/user.svg";
import messagesIcon from "../../../../assets/img/messages.svg";
import notificationIcon from "../../../../assets/img/notification.svg";
import settingsIcon from "../../../../assets/img/settings.svg";

function MobileMenuList() {
  const isOpen = useSelector((state) => state.mobileMenu.isMobileMenuOpen);

  const dispatch = useDispatch();
  const closeMenuOnBegroundClick = (e) => { 
    dispatch(setMobileMenuClose());
  };

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 100}} exit={{opacity: 0}} transition={{duration: 0.3}}
      onClick={closeMenuOnBegroundClick}
      className={styles["open-menu-options-wrapper"]}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles["open-menu-options"]}
      >
        <div className={styles['list-items-wrapper']}>
          <NavLink to="/" onClick={closeMenuOnBegroundClick}>
            <img src={searchIcon} alt="Пошук" />
            <span>Пошук</span>
          </NavLink>
          <NavLink to="/profile" onClick={closeMenuOnBegroundClick}>
            <img src={profileIcon} alt="Моя сторінка" />
            <span>Моя сторінка</span>
          </NavLink>
          <NavLink to="/messages" onClick={closeMenuOnBegroundClick}>
            <img src={messagesIcon} alt="Повідомлення" />
            <span>Повідомлення</span>
          </NavLink>
          <NavLink to="/notifications" onClick={closeMenuOnBegroundClick}>
            <img src={notificationIcon} alt="Сповіщення" />
            <span>Сповіщення</span>
          </NavLink>
          <NavLink to="/settings" onClick={closeMenuOnBegroundClick}>
            <img src={settingsIcon} alt="Налаштування" />
            <span>Налаштування</span>
          </NavLink>
        </div>
      </div>
    </motion.div>
  );
}

export default MobileMenuList;
