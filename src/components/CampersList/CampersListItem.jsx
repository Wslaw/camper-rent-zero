import React, { useState } from "react";
import styles from "./campersList.module.css";
import Icon from "../Icon/Icon";
import Modal from "../Modal/Modal.jsx";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";

const CampersListItem = ({ name, price, gallery = [], rating = 0, location = "", adults = 0, transmission = "", engine = "", description = "", reviews = [], details = { kitchen: 0, beds: 0, airConditioner: 0 } }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const addFavorite = (camper) => {
    const existingFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = [...existingFavorites, camper];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const removeFavorite = (name) => {
    const existingFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = existingFavorites.filter((camper) => camper.name !== name);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(name);
    } else {
      const camper = { name, price, gallery, rating, location, adults, transmission, engine, description, reviews, details };
      addFavorite(camper);
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <li className={styles.campersListItem}>
      <div className={styles.container} style={{ backgroundImage: `url(${gallery[0] || ""})` }}></div>
      <div className={styles.description}>
        <div className={styles.footerDescription}>
          <div className={styles.footDescTop}>
            <h4 className={styles.title}>{name}</h4>
            <div className={styles.euro}>
              <p className={styles.text}>€ {price},00</p>
              <Icon name={isFavorite ? "icon-heart_red" : "icon-heart"} className={styles.icon} onClick={toggleFavorite} />
            </div>
          </div>
          <div className={styles.reviews}>
            <div className={styles.star}>
              <Icon name="icon-star" className={styles.iconStar} />
              <p className={styles.textRew}>{`${rating} (${reviews.length} Reviews)`}</p>
            </div>
            <div className={styles.location}>
              <Icon name="icon-location" className={styles.iconLocation} />
              <p className={styles.textLocation}>{location}</p>
            </div>
          </div>
        </div>
        <div className={styles.middleDescription}>
          <p className={styles.textSupport}>{description}</p>
          <div className={styles.links}>
            <button className={styles.link}>Features</button>
            <button className={styles.link}>Reviews</button>
          </div>
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
          {details.kitchen > 0 && (
            <button className={styles.btnDescription} type="button">
              <Icon name="icon-food" className={styles.iconFood} /> <span>kitchen</span>
            </button>
          )}
          <button className={styles.btnDescription} type="button">
            <Icon name="icon-bed" className={styles.iconBed} />{" "}
            <span>
              {details.beds} {details.beds > 1 ? "beds" : "bed"}
            </span>
          </button>
          {details.airConditioner > 0 && (
            <button className={styles.btnDescription} type="button">
              <Icon name="icon-windy" className={styles.iconDown} /> <span>AC</span>
            </button>
          )}
        </div>
        <button className={styles.btn} type="button" >
          Show more
        </button>
      </div>
    </li>
  );
};

export default CampersListItem;
