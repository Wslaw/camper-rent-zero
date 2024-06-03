// import Button from "../../Button/Button";
import CampersList from "../../CampersList/CampersList";
import items from "../../../data/campers.json";
import SearchBar from "../../SearchBar/SearchBar";
import styles from "./main.module.css";

const Main = () => {
  return (
    <main className={styles.sectionCatalog}>
      <SearchBar className={StyleSheet.searchBar} />
      <CampersList  items={items} />
    </main>
  );
};

export default Main;
