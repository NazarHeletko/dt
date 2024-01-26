import React from "react";
import styles from "./UserPage.module.css";
import { setUserPageClose } from "../../../../store/userSlice";
import { useDispatch } from "react-redux";
import ageIcon from "../../../../assets/img/birthday-cake.svg";
import sexIcon from "../../../../assets/img/intersex.svg";
import heightIcon from "../../../../assets/img/height.svg";
import maritalIcon from "../../../../assets/img/ring.svg";
import childIcon from "../../../../assets/img/baby.svg";
import locationIcon from "../../../../assets/img/location.svg";
import religionIcon from "../../../../assets/img/religion.svg";
import smokeIcon from "../../../../assets/img/pipe-smoke.svg";
import alcoholIcon from "../../../../assets/img/alcohol.svg";
import aimIcon from "../../../../assets/img/search.svg";
import educationIcon from "../../../../assets/img/education.svg";
import weightIcon from "../../../../assets/img/weight.svg";
import workIcon from "../../../../assets/img/work.svg";
import heartNotActiveIcon from "../../../../assets/img/heart-dont-liked.svg";
import chatIcon from "../../../../assets/img/message-chat.svg";
import giftIcon from "../../../../assets/img/gift.svg";
import blockIcon from "../../../../assets/img/blocked-user.svg";
import eyeIcon from "../../../../assets/img/eye.svg"
import zodiacIcon from "../../../../assets/img/zodiac.svg"
import worktoolIcon from "../../../../assets/img/tools.svg"
import ratingIcon from "../../../../assets/img/rating.svg"
import bookmark from "../../../../assets/img/bookmark.svg"
import Gift from "./Gift/Gift";

function UserPage() {
  const dispatch = useDispatch();
  const closeSinglePage = () => {
    dispatch(setUserPageClose());
  };
  return (
    <div className={styles["user-page"]}>
      <div className={styles["short-info"]}>
        <div className={styles["short-info-img"]}>
          <img
            src={
              "https://nypost.com/wp-content/uploads/sites/2/2023/08/NYPICHPDPICT000025178257.jpg"
            }
            alt=""
          />
        </div>

        <div className={styles["description"]}>
          <div className={styles.name}>
            <h2>Катя Редиска</h2>
            <span>
              <img src={locationIcon} alt="" />
              Львівська, Дрогобич
            </span>
            <p>Онлайн: 06.08.2023</p>
          </div>
          <div className={styles.info}>
            <div className={styles["user-info"]}>
              <ul>
                <li>
                  <img src={ageIcon} alt="" />
                  Вік: <span> 30</span>
                </li>
                <li>
                  <img src={sexIcon} alt="" />
                  Стать: <span>жіноча</span>
                </li>
                <li>
                  <img src={heightIcon} alt="" />
                  Ріст: <span>170 см</span>
                </li>
                <li>
                  <img src={weightIcon} alt="" />
                  Вага: <span>65кг</span>
                </li>
                <li>
                  <img src={maritalIcon} alt="" />
                  Статус: <span>розведена</span>
                </li>
                <li>
                  <img src={childIcon} alt="" />
                  Діти: <span>2</span>
                </li>
                <li>
                  <img src={religionIcon} alt="" />
                  Релігія: <span>християнство</span>
                </li>
                <li>
                  <img src={zodiacIcon} alt="" />
                  Зодіак: <span>телець</span>
                </li>
                <li>
                  <img src={smokeIcon} alt="" />
                  Куріння: <span>не курю</span>
                </li>
                <li>
                  <img src={alcoholIcon} alt="" />
                  Алкоголь: <span>інколи</span>
                </li>
                <li>
                  <img src={aimIcon} alt="" />
                  Мета: <span>стосунки</span>
                </li>
                <li>
                  <img src={educationIcon} alt="" />
                  Освіта: <span>вища</span>
                </li>
                <li>
                  <img src={workIcon} alt="" />
                  Професія: <span>перукар</span>
                </li>
                <li>
                  <img src={worktoolIcon} alt="" />
                  Стан зайнятості: <span>безробітня</span>
                </li>
              </ul>
            </div>
            <div className={styles["user-options"]}>
              <div className={styles["options-item"]}>
                <img src={heartNotActiveIcon} alt="" />
                <span>Вподобати</span>
              </div>
              <div className={styles["options-item"]}>
                <img src={chatIcon} alt="" />
                <span>Написати</span>
              </div>
              <div className={styles["options-item"]}>
                <img src={giftIcon} alt="" />
                <span>Подарунок</span>
              </div>
              <div className={styles["options-item"]}>
                <img src={bookmark} alt="" />
                <span>Добавити в закладки</span>
              </div>
              <div className={styles.stats}>
                <div><img src={eyeIcon} alt="" /><span>112</span></div>
                <div><img src={ratingIcon} alt="" /><span>66</span></div>
              </div>
              <div className={styles['gift-section']}>
                  <p>Останні подарунки</p>
                  <div className={styles['gifts-list']}>
                    <Gift/>
                    <Gift/>
                    <Gift/>
                  </div>
              </div>
              <div className={`${styles["options-item"]} ${styles.block}}`}>
                <img src={blockIcon} alt="" />
                <span>Заблокувати</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className={styles["about-me-title"]}>Трохи про мене</p>
      <div className={styles["about-user"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        voluptas nesciunt aliquid possimus ducimus rem quas adipisci, sapiente
        veritatis hic saepe dolores blanditiis, rerum repudiandae architecto
        illum vero velit consectetur.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        voluptas nesciunt aliquid possimus ducimus rem quas adipisci, sapiente
        veritatis hic saepe dolores blanditiis, rerum repudiandae architecto
        illum vero velit consectetur.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        voluptas nesciunt aliquid possimus ducimus rem quas adipisci, sapiente
        veritatis hic saepe dolores blanditiis, rerum repudiandae architecto
        illum vero velit consectetur.
      </div>
      <a
        href="#"
        onClick={closeSinglePage}
        className={styles["close-single-page-btn"]}
      ></a>
    </div>
  );
}

export default UserPage;
