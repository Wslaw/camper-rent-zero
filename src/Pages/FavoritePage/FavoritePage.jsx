import React, { useState, useEffect } from "react";
import CampersList from "../../components/CampersList/CampersList";

const FavoritePage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  if (favorites.length === 0) {
    return <p>No favorite campers found.</p>;
  }

  return (
    <div>
      <h1>Favorite Campers</h1>
      <CampersList campers={favorites} />
    </div>
  );
};

export default FavoritePage;
