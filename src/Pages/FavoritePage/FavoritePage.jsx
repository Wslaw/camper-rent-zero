import styles from "./favorite-page.module.css";
import Footer from "../../components/Footer/Footer";
const FavoritePage = () => {
  return (
    <div className={styles.favorite}>
      <div className={styles.title}>
        <h1>Favorite Page</h1>
      </div>
      <Footer className={styles.footer} />
    </div>
  );
};
export default FavoritePage;
