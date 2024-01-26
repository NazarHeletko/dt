import React from "react";
import styles from "./LoadMore.module.css";
import loadIcon from "../../../../assets/img/refresh.png";

function LoadMore() {
  return (
    <div className={styles["load-more"]}>
        <p>Показати ще</p>
        <img src={loadIcon} alt="load icon" />
    </div>
  );
}

export default LoadMore;
