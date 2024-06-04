import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./formfield.module.css";
import Icon from "../Icon/Icon";

const FormField = () => {
  const [startDate, setStartDate] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleIconClick = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const CustomInput = ({ value, onClick }) => (
    <div className={styles.inputGroup}>
      <input type="text" className={styles.formControl} onClick={onClick} value={value} placeholder="Booking date" readOnly aria-label="Booking date" />
      <Icon name="icon-calendar" className={styles.icon} onClick={handleIconClick} />
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity()) {
      // Handle form submission
      console.log("Form is valid and ready for submission");
    } else {
      form.reportValidity();
    }
  };

  return (
    <form className={styles.formfield} onSubmit={handleSubmit} noValidate>
      <div className={styles.wraptext}>
        <h2 className={styles.title}>Book your campervan now</h2>
        <p className={styles.text}>Stay connected! We are always ready to help you.</p>
      </div>

      <div className={styles.formGroup}>
        <div className={styles.inputGroup}>
          <input type="text" className={styles.formControl} id="name-description" placeholder="Name" aria-label="Name" aria-describedby="name-description" required />
          <p id="name-description" className={styles.description}>
            Please enter your full name.
          </p>
        </div>

        <div className={styles.inputGroup}>
          <input type="email" className={styles.formControl} id="email-description" placeholder="Email" aria-label="Email" aria-describedby="email-description" required />
          <p id="email-description" className={styles.description}>
            Please enter your email address.
          </p>
        </div>

        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} onClickOutside={() => setIsCalendarOpen(false)} open={isCalendarOpen} customInput={<CustomInput />} required />
        <p id="booking-date-description" className={styles.description}>
          Please enter the date you wish to book.
        </p>

        <div className={styles.inputGroup}>
          <textarea className={styles.formControl} placeholder="Comment" aria-label="Comment" id="comment" aria-describedby="comment-description"></textarea>
          <p id="comment-description" className={styles.description}>
            Please enter any additional comments or requests.
          </p>
        </div>
      </div>
      <button className={styles.btn} type="submit">
        <span className={styles.span}>Search</span>
      </button>
    </form>
  );
};

export default FormField;
