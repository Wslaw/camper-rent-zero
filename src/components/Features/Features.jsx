import React, { forwardRef, useEffect } from "react";
import campersData from "../../data/campers.json";
import FormField from "../FormField/FormField";
import styles from "./features.module.css";
import Icon from "../Icon/Icon";

const Features = forwardRef((props, ref) => {
  const { camperId } = props;
  const camper = campersData.find((item) => item._id === camperId);

  useEffect(() => {
    // Логика, если необходимо
  }, []); // Пустой массив зависимостей, чтобы useEffect сработал только при монтировании

  if (!camper) {
    return null; // Если кемпер не найден, возвращаем null
  }

  return (
    <div className={styles.features} ref={ref}>
      <div className={styles.details}>
        <ul className={styles.featuresList}>
          <li className={styles.featureItem}>
            <Icon name="icon-people" className={styles.featureIcon} />
            <div className={styles.featureText}>
              <span className={styles.featureValue}>{camper.adults}</span> <span className={styles.featureLabel}>adults</span>
            </div>
          </li>
          <li className={styles.featureItem}>
            <Icon name="icon-transmission" className={styles.featureIcon} />
            <div className={styles.featureText}>
              <span className={styles.featureValue}>{camper.transmission}</span>
              {/* <span className={styles.featureLabel}>Transmission</span> */}
            </div>
          </li>
          <li className={styles.featureItem}>
            <Icon name="icon-windy" className={styles.featureIcon} />
            <div className={styles.featureText}>
              <span className={styles.featureValue}>{camper.details.airConditioner === 1 ? "AC" : ""}</span>
              {/* <span className={styles.featureLabel}>AC</span> */}
            </div>
          </li>
          <li className={styles.featureItem}>
            <Icon name="icon-gas_station" className={styles.featureIcon} />
            <div className={styles.featureText}>
              <span className={styles.featureValue}>{camper.engine}</span>
              {/* <span className={styles.featureLabel}>Engine</span> */}
            </div>
          </li>
          <li className={styles.featureItem}>
            <Icon name="icon-food" className={styles.featureIcon} />
            <div className={styles.featureText}>
              <span className={styles.featureValue}>{camper.details.kitchen === 1 ? "kitchen" : ""}</span>
              {/* <span className={styles.featureLabel}>Kitchen</span> */}
            </div>
          </li>
          <li className={styles.featureItem}>
            <Icon name="icon-bed" className={styles.featureIcon} />
            <div className={styles.featureText}>
              <span className={styles.featureValue}>{camper.details.beds}</span> <span className={styles.featureLabel}>beds</span>
            </div>
          </li>
          <li className={styles.featureItem}>
            <Icon name="icon-air-conditioner" className={styles.featureIcon} />
            <div className={styles.featureText}>
              <span className={styles.featureValue}>{camper.details.airConditioner === 1 ? "air-conditioner" : ""}</span>
              {/* <span className={styles.featureLabel}>Air-conditioner</span> */}
            </div>
          </li>
          <li className={styles.featureItem}>
            <Icon name="icon-cd" className={styles.featureIcon} />
            <div className={styles.featureText}>
              <span className={styles.featureValue}>{camper.details.CD === 1 ? "CD" : ""}</span>
               {/* <span className={styles.featureLabel}>CD</span> */}
            </div>
          </li>
          <li className={styles.featureItem}>
            <Icon name="icon-radio" className={styles.featureIcon} />
            <div className={styles.featureText}>
              <span className={styles.featureValue}>{camper.details.radio === 1 ? "Radio" : ""}</span>
               {/* <span className={styles.featureLabel}>Radio</span> */}
            </div>
          </li>
          <li className={styles.featureItem}>
            <Icon name="icon-hob" className={styles.featureIcon} />
            <div className={styles.featureText}>
              <span className={styles.featureValue}>{camper.details.hob}</span> <span className={styles.featureLabel}>Hob</span>
            </div>
          </li>
        </ul>
        <div className={styles.vehicleDetails}>
          <h3 className={styles.detailsTitle}>Vehicle Details</h3>
          <hr className={styles.line} size="3px" width="430px" align="left" />
          <ul className={styles.detailsList}>
            <li>
              <span>Form:</span> <span>{camper.form}</span>
            </li>
            <li>
              <span>Length:</span> <span>{camper.length}</span>
            </li>
            <li>
              <span>Width:</span> <span>{camper.width}</span>
            </li>
            <li>
              <span>Height:</span> <span>{camper.height}</span>
            </li>
            <li>
              <span>Tank:</span> <span>{camper.tank}</span>
            </li>
            <li>
              <span>Consumption:</span> <span>{camper.consumption}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.form}>
        <FormField />
      </div>
    </div>
  );
});

export default Features;
