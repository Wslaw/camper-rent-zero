import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from "./formfield.module.css";

const FormField = () => {
  const [startDate, setStartDate] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleIconClick = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const CustomInput = ({ value, onClick }) => (
    <div className={styles.inputGroup}>
      <input
        type="text"
        className={styles.formControl}
        onClick={onClick}
        value={value}
        placeholder="Booking date"
        readOnly
        aria-label="Booking date"
      />
      <svg onClick={handleIconClick} className={styles.icon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.8333 3.33331H4.16667C3.24619 3.33331 2.5 4.07951 2.5 4.99998V16.6666C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6666V4.99998C17.5 4.07951 16.7538 3.33331 15.8333 3.33331Z"
          stroke="#101828"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M13.3335 1.66669V5.00002" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.6665 1.66669V5.00002" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.5 8.33331H17.5" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );

  return (
    <div className={styles.formfield}>
      <div className={styles.wraptext}>
        <h2 className={styles.title}>Book your campervan now</h2>
        <p className={styles.text}>Stay connected! We are always ready to help you.</p>
      </div>

      <div className={styles.formGroup}>
        <div className={styles.inputGroup}>
          <input type="text" className={styles.formControl} id="name-description" placeholder="Name" aria-label="Name" aria-describedby="name-description" />
          <p id="name-description" className={styles.description}>
            Please enter your full name.
          </p>
        </div>

        <div className={styles.inputGroup}>
          <input type="text" className={styles.formControl} id="email-description" placeholder="Email" aria-label="Email" aria-describedby="email-description" />
          <p id="email-description" className={styles.description}>
            Please enter your email address.
          </p>
        </div>

        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          onClickOutside={() => setIsCalendarOpen(false)}
          open={isCalendarOpen}
          customInput={<CustomInput />}
        />
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
      <button className={styles.btn}>
        <span className={styles.span}>Search</span>
      </button>
    </div>
  );
};

export default FormField;
