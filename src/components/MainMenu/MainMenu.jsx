import styles from "./main-menu.module.css";
import { NavLink } from "react-router-dom";

const MainMenu = () => {
    
    return (
        <ul className={styles.menu}>
            <li className={styles.item}>
                <NavLink className={styles.link} to="/">Home Page</NavLink>
            </li>
            <li className={styles.item}>
                <NavLink className={styles.link} to="/catalog">Catalog</NavLink>
            </li>
            <li className={styles.item}>
                <NavLink className={styles.link} to="/favorite">Faforite</NavLink>
            </li>
        </ul>
    )
}

export default MainMenu;
