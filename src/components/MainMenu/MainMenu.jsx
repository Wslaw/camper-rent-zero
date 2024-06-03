import styles from "./main-menu.module.css";
import { NavLink } from "react-router-dom";
import Icon from "../Icon/Icon";

const MainMenu = () => {
    
    return (
      <div className={styles.container}>
        <div className={styles.logo}>
          <Icon name="icon-camper1" className={styles.iconCamper} />
          <span className={styles.logoTitle}>CampersRent</span>
        </div>
        <ul className={styles.menu}>
          <li className={styles.item}>
            <NavLink className={styles.link} to="/">
              Home Page
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink className={styles.link} to="/catalog">
              Catalog
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink className={styles.link} to="/favorites">
              Faforites
            </NavLink>
          </li>
        </ul>
      </div>
    );
}

export default MainMenu;
