import React, { useState } from "react";
import styles from "./catalog-page.module.css";
import Main from "../../components/Main/Main.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Loader from "../../components/Loader/Loader.jsx";

const CatalogPage = () => {
  const [visibleAds, setVisibleAds] = useState(4);
  const [isFooterCollapsed, setIsFooterCollapsed] = useState(false); // Додаємо стан для футера

  const loadMoreAds = () => {
    setVisibleAds((prevVisibleAds) => prevVisibleAds + 4);
    setIsFooterCollapsed(true); // Встановлюємо футер як зібраний при завантаженні більше оголошень
  };

  return (
    <div className={styles.container}>
      <Loader />
      <Main className="app" visibleAds={visibleAds} loadMoreAds={loadMoreAds} />
      <Footer className={`${styles.footer} ${isFooterCollapsed ? styles.collapsed : ""}`} /> {/* Додаємо клас collapsed, якщо футер зібраний */}
    </div>
  );
};
export default CatalogPage;
