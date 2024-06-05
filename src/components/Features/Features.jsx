import styles from "./features.module.css";
import FormField from "../FormField/FormField.jsx"
import React from "react";

// const Features = () => {
const Features = React.forwardRef((props, ref) => {

    return (
        <div className={styles.features}>
            <FormField/>
        </div>
    )
});

export default Features;
