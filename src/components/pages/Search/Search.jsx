import React from "react";
import PagesContainer from "../PagesContainer/PagesContainer";
import styles from "./Search.module.css";
import User from "./User/User";
import FilterSection from "./FilterSearch/FilterSection/FilterSection";
import LoadMore from "./LoadMore/LoadMore";
import { useSelector } from "react-redux";
import UserPage from "./UserPage/UserPage";

function Search() {
  const isOpenUserPage = useSelector((state) => state.user.isUserPageOpen);

  return (
    <PagesContainer>
      <div className={styles.search}>
        {!isOpenUserPage ? (
          <>
            <FilterSection />
            <div className={styles["items-greed"]}>
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
            </div>
            <LoadMore />
          </>
        ) : (
          <UserPage />
        )}
      </div>
    </PagesContainer>
  );
}

export default Search;
