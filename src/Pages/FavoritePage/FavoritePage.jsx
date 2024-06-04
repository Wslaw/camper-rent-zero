import React, { useState, useEffect } from "react";
import styles from "./favorite-page.module.css";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import CampersListItem from "../../components/CampersList/CampersListItem";

const FavoritePage = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.favorite}>
      <div className={styles.title}>
        <h1>Favorite Page</h1>
      </div>
      <div className={styles.favoriteList}>{favorites.length > 0 ? favorites.map((name) => <CampersListItem key={name} name={name} />) : <p>No favorite items found.</p>}</div>
      <Footer className={styles.footer} />
    </div>
  );
};

export default FavoritePage;
