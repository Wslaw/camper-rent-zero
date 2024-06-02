import styles from "./campersList.module.css";
// import sprite from "../../assets/svg/sprite.svg"
import Icon from "../Icon/Icon.jsx"

const CampersListItem = ({ name, price, gallery }) => {
  return (
    <li className={styles.campersListItems}>
      <div className={styles.container} style={{ backgroundImage: `url(${gallery[0]})` }}></div>
      <div className={styles.description}>
        <div className={styles.footerDescription}>
          <div className={styles.footDescTop}>
            <h4 className={styles.title}>{name}</h4>
            <div className={styles.euro}>
              <p className={styles.text}>€ {price},00</p>
              <Icon
                name="icon-heart"
                className={styles.icon}
                // onClick={handleIconClick}
              />
            </div>
          </div>
          <div className={styles.reviews}>
            <div className={styles.star}>
              <Icon name="icon-star" className={styles.iconStar} />
              <p className={styles.textRew}>4.4(2 Reviews)</p>
            </div>
            <div className={styles.location}>
              <Icon name="icon-location" className={styles.iconLocation} />
              <p className={styles.textLocation}>Kyiv, Ukraine</p>
            </div>
          </div>
        </div>
        <div className={styles.middleDescription}>
          <p className={styles.textMiddle}>Embrace simplicity and freedom with the Mavericks panel truck, an ideal choice for solo travelers or couples seeking a compact and efficient way to explore the open roads.</p>
        </div>
        <div className={styles.downDescription}>
          <button className={styles.btnDescription} type="button">
            <Icon name="icon-people" className={styles.iconDown} /> <span>2 adults</span>
          </button>
          <button className={styles.btnDescription} type="button">
            <Icon name="icon-transmission" className={styles.iconTransmission} /> <span>Automatic</span>
          </button>
          <button className={styles.btnDescription} type="button">
            <Icon name="icon-gas_station" className={styles.iconDown} /> <span>Petrol</span>
          </button>
          <button className={styles.btnDescription} type="button">
            <Icon name="icon-food" className={styles.iconFood} /> <span>Kitchen</span>
          </button>
          <button className={styles.btnDescription} type="button">
            <Icon name="icon-bed" className={styles.iconBed} /> <span>1 Bed</span>
          </button>
          <button className={styles.btnDescription} type="button">
            <Icon name="icon-windy" className={styles.iconDown} /> <span>AC</span>
          </button>
        </div>
        <button className={styles.btn} type="button">
          Show more
        </button>
      </div>
    </li>
  );
};

export default CampersListItem;
