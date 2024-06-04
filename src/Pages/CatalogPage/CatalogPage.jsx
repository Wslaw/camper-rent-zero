import styles from "./catalog-page.module.css";
import Main from "../../components/Main/Main.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const CatalogPage = () => {
  return (
    <div className={styles.container}>
      <Main className="app" />
      <Footer className={styles.footer } />
    </div>
  );
};
export default CatalogPage;
