import React, { useEffect } from "react";
import styles from "./MobileMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setMobileMenuOpen,  setMobileMenuClose} from "../../../../store/generalSlice";

function MobileMenuButton() {
  const isOpen = useSelector((state) => state.mobileMenu.isMobileMenuOpen)
  const dispatch = useDispatch()

  return (
    <>
      <div
        onClick={()=>{isOpen === 'open'? dispatch(setMobileMenuClose()) :dispatch(setMobileMenuOpen())}}
        className={`${styles.btn} ${
          isOpen === 'open' ? styles.active : isOpen !== 'initial' && styles["not-active"]
        }`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

    </>
  );
}

export default MobileMenuButton;
