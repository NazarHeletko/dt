import React from "react";
import { motion } from "framer-motion";
import styles from "./User.module.css";
import birthIcon from "../../../../assets/img/birthday-cake.svg";
import maritalIcon from "../../../../assets/img/ring.svg";
import babylIcon from "../../../../assets/img/baby.svg";
import heightIcon from "../../../../assets/img/height.svg";
import sexIcon from "../../../../assets/img/intersex.svg";
import locationIcon from "../../../../assets/img/location.svg";
import { useDispatch } from "react-redux";
import { setUserPageOpen } from "../../../../store/userSlice";

function User() {
  const dispatch = useDispatch()
  const openSingleUserPage = () => {
    dispatch(setUserPageOpen())
  }

  return (
    <motion.div whileHover={{scale: 1.015}} className={styles.user} onClick={openSingleUserPage}>
      <div className={styles["heder-info"]}>
        <div className={styles["img-profile"]}>
          <img
            src="https://ofigenno.com/wp-content/uploads/posts/d/devushka-bez-makiyazha/thumb.jpg"
            alt=""
          />
        </div>
        <div className={styles["profile-info"]}>
          <ul>
            <li>
              <img src={birthIcon} alt="" /> <span>30 років</span>
            </li>
            <li>
              <img src={sexIcon} alt="" /> <span>жінка</span>
            </li>
            <li>
              <img src={heightIcon} alt="" />
              <span>170 см</span>{" "}
            </li>
            <li>
              <img src={maritalIcon} alt="" />
              <span>розведена</span>
            </li>
            <li>
              <img src={babylIcon} alt="" />
              <span>2</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles["name-section"]}>
        
          <div className={styles.name}><div className={styles['online-status']}></div><span>Катя Редиска</span></div>
        
      </div>
      <div className={styles["about-section"]}>
        <p>
          Мене звати Катя. Я вигаданий персонаж з наукової фантастики. Я люблю
          грати в хокей. Шукаю чоловіка, який любить їздити верхи на коровах!
        </p>
      </div>
      
        <p className={styles.location}>
          <img src={locationIcon} alt="" />
          Львівська обл., Дрогобич
        </p>
      
    </motion.div>
  );
}

export default User;
