import styles from "./catalog-page.module.css";
import Main from "../../components/Loader/Main/Main.jsx";

const CatalogPage = () => {
  return (
    <div className={styles.container}>
      <h1>Catalog Page</h1>
      <hr></hr>
      <Main className="app" />
    </div>
  );
};
export default CatalogPage;
