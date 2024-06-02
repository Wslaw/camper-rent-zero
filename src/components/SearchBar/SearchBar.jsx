import React from "react";
import styles from "./search-bar.module.css";
import Icon from "../Icon/Icon.jsx";

const SearchBar = () => {
  return (
    <div className={styles.sectionSearchBar}>
      {/* <h1>SearchBar</h1> */}
      <div className={styles.sbLoc}>
        <h3>Location</h3>
        <div className={styles.inputWrapper}>
          <Icon name="icon-location" className={styles.iconLocation} />
          <input className={styles.location} placeholder="City"></input>
        </div>
      </div>
      <p>Filters</p>
      <div className={styles.sbVehicle}>
        <h3>Vehicle equipment</h3>
      </div>
      <div className={styles.sb}>
        <h3>Vehicle type</h3>
      </div>
    </div>
  );
};

export default SearchBar;
