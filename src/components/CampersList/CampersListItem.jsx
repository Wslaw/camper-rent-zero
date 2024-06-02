import React from "react";
import styles from "./campersList.module.css";
import Icon from "../Icon/Icon.jsx";

const CampersListItem = ({ name, price, gallery, rating, location, adults, transmission, engine, description, reviews, details }) => {
  const reviewText = `${rating} (${reviews.length} Reviews)`;
  const { beds, airConditioner, kitchen } = details;

  return (
    <li className={styles.campersListItems}>
      <div className={styles.container} style={{ backgroundImage: `url(${gallery[0]})` }}></div>
      <div className={styles.description}>
        <div className={styles.footerDescription}>
          <div className={styles.footDescTop}>
            <h4 className={styles.title}>{name}</h4>
            <div className={styles.euro}>
              <p className={styles.text}>€ {price},00</p>
              <Icon name="icon-heart" className={styles.icon} />
            </div>
          </div>
          <div className={styles.reviews}>
            <div className={styles.star}>
              <Icon name="icon-star" className={styles.iconStar} />
              <p className={styles.textRew}>{reviewText}</p>
            </div>
            <div className={styles.location}>
              <Icon name="icon-location" className={styles.iconLocation} />
              <p className={styles.textLocation}>{location}</p>
            </div>
          </div>
        </div>
        <div className={styles.middleDescription}>
          <p className={styles.textSupport}>{description}</p>
        </div>
        <div className={styles.downDescription}>
          <button className={styles.btnDescription} type="button">
            <Icon name="icon-people" className={styles.iconDown} /> <span>{adults} adults</span>
          </button>
          <button className={styles.btnDescription} type="button">
            <Icon name="icon-transmission" className={styles.iconTransmission} /> <span>{transmission}</span>
          </button>
          <button className={styles.btnDescription} type="button">
            <Icon name="icon-gas_station" className={styles.iconDown} /> <span>{engine}</span>
          </button>
          {kitchen > 0 && (
            <button className={styles.btnDescription} type="button">
              <Icon name="icon-food" className={styles.iconFood} /> <span>kitchen</span>
            </button>
          )}
          <button className={styles.btnDescription} type="button">
            <Icon name="icon-bed" className={styles.iconBed} />{" "}
            <span>
              {beds} {beds > 1 ? "beds" : "bed"}
            </span>
          </button>
          {airConditioner > 0 && (
            <button className={styles.btnDescription} type="button">
              <Icon name="icon-windy" className={styles.iconDown} /> <span>AC</span>
            </button>
          )}
        </div>
        <button className={styles.btn} type="button">
          Show more
        </button>
      </div>
    </li>
  );
};

export default CampersListItem;
