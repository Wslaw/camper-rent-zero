import styles from "./favorite-page.module.css";
import Loader from "../../components/Loader/Loader.jsx";
const FavoritePage = () => {
  return (
    <div>
      <Loader/>
      <h1 className={styles.title}>Favorite Page</h1>
    </div>
  );
};
export default FavoritePage;
