import React, { useState, useEffect } from "react";
import styles from "./loader.module.css";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Симуляция задержки загрузки контента
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    isLoading && (
      <div className={styles.loaderContainer}>
        <div className={styles.loaderElement} />
      </div>
    )
  );
};

export default Loader;