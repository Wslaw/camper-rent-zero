// VehicleEquipment.jsx
import React from "react";
import styles from "./vehicle-equipment.module.css";
import Icon from "../Icon/Icon";
// import sprite from "../../assets/svg/sprite.svg";

const equipments = [
  { id: "icon-windy", label: "AC" },
  { id: "icon-transmission", label: "Automatic" },
  { id: "icon-food", label: "Kitchen" },
  { id: "icon-tv", label: "TV" },
  { id: "icon-shower", label: "Shower/WC" },
];

const VehicleEquipment = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Vehicle Equipment</h3>
      <div className={styles.iconLine}>
        <Icon name="icon-line" width={360} height={2} />
      </div>
      <div className={styles.checkboxButtons}>
        {equipments.map((equipment) => (
          <button key={equipment.id} className={styles.checkboxButton}>
            <input type="checkbox" id={equipment.id} />
            <label htmlFor={equipment.id}>
              <Icon className={styles.icon} name={equipment.id} width={20} height={20} />
              <span className={styles.checkboxButtonText}>{equipment.label}</span>
            </label>
          </button>
        ))}
      </div>
    </div>
  );
};

export default VehicleEquipment;
