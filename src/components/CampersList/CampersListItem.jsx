import styles from "./campersList.module.css";

const CampersListItem = ({ name, price, gallery }) => {
  return (
    <li className={styles.campersListItems}>
      <div>
        <img src={gallery[0]} alt="ico" />
      </div>
      <h4>{name}</h4>
      <p>Price: {price}</p>
    </li>
  );
};

export default CampersListItem;
