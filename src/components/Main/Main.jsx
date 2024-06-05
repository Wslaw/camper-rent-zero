import React from "react";
import CampersList from "../CampersList/CampersList";
import campersData from "../../data/campers.json";
import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./main.module.css";

const Main = ({ visibleAds, loadMoreAds }) => {
  return (
    <main className={styles.sectionCatalog}>
      <SearchBar className={StyleSheet.searchBar} />
      <CampersList campers={campersData.slice(0, visibleAds)} /> {/* Використовуйте slice для відображення потрібної кількості оголошень */}
      {campersData.length > visibleAds && ( // Перевірка, чи є більше оголошень для завантаження
        <button onClick={loadMoreAds}>Load more</button> // Кнопка для завантаження більше оголошень
      )}
    </main>
  );
};

export default Main;
