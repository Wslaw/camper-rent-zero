import styles from "./campersList.module.css";
import CampersListItem from "./CampersListItem";

const CampersList = ({  items = [] }) => {
    
         const elements = items.map(({_id, ...rest}) => (
        <CampersListItem key={_id}{...rest} />
    ));
    return (
        <div className={styles.list}>
        <ul className={styles.campersList}>
          {elements}
            </ul>
      </div>
    );
};

export default CampersList;