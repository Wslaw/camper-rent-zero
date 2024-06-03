// VehicleType.jsx
import React from "react";
import styles from "./vehicle-type.module.css";
import Icon from "../Icon/Icon";

const VehicleType = () => {
  return (
    <div className={styles.container}>
      <h3>Vehicle Type</h3>
      <div className={styles.iconLine}>
        <Icon name="icon-line" width={360} height={1} />
      </div>
      <div className={styles.radioButtons}>
        <input type="radio" id="fullyIntegrated" name="vehicleType" value="Fully Integrated" />
        <label htmlFor="fullyIntegrated">
          <Icon name="icon-camper1" width={20} height={20} />
          <span>Fully Integrated</span>
        </label>

        <input type="radio" id="alcove" name="vehicleType" value="Alcove" />
        <label htmlFor="alcove">
          <Icon name="icon-camper2" width={20} height={20} />
          <span>Alcove</span>
        </label>

        <input type="radio" id="integrated" name="vehicleType" value="Integrated" />
        <label htmlFor="integrated">
          <Icon name="icon-camper3" width={20} height={20} />
          <span>Integrated</span>
        </label>
      </div>
    </div>
  );
};

export default VehicleType;
