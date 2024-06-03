// import React, { useEffect } from "react";
// import styles from "./modal.module.css";
// import Icon from "../Icon/Icon.jsx";

// const Modal = ({ isOpen, onClose, camper }) => {
//   useEffect(() => {
//     const handleEsc = (event) => {
//       if (event.key === "Escape") {
//         onClose();
//       }
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => {
//       window.removeEventListener("keydown", handleEsc);
//     };
//   }, [onClose]);

//   if (!isOpen) {
//     return null;
//   }

//   const { name, price, rating, reviews, location, gallery, description } = camper;
//   const reviewText = `${rating} (${reviews.length} Reviews)`;

//   return (
//     <div className={styles.backdrop} onClick={onClose}>
//       <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
//         <div className={styles.header}>
//           <h2 className={styles.title}>{name}</h2>
//           <Icon name="icon-close" className={styles.iconClose} onClick={onClose} />
//         </div>
//         <div className={styles.infoRow}>
//           <Icon name="icon-star" className={styles.iconStar} />
//           <span>{reviewText}</span>
//           <Icon name="icon-location" className={styles.iconLocation} />
//           <span>{location}</span>
//         </div>
//         <p className={styles.price}>€ {price},00</p>
//         <div className={styles.gallery}>
//           {gallery.map((img, index) => (
//             <img key={index} src={img} alt={`${name} ${index + 1}`} className={styles.galleryImage} />
//           ))}
//         </div>
//         <p className={styles.description}>{description}</p>
//         {/* Additional Features and Reviews components can be added here */}
//       </div>
//     </div>
//   );
// };

// export default Modal;

// нет Features Reviews но  работает как надо***************************************************************
// import React, { useEffect } from "react";
// import ReactDOM from "react-dom";
// import styles from "./modal.module.css";
// import Icon from "../Icon/Icon";

// const Modal = ({ isOpen, onClose, camper }) => {
//   useEffect(() => {
//     const handleEsc = (event) => {
//       if (event.keyCode === 27) {
//         onClose();
//       }
//     };

//     if (isOpen) {
//       document.addEventListener("keydown", handleEsc);
//     } else {
//       document.removeEventListener("keydown", handleEsc);
//     }

//     return () => {
//       document.removeEventListener("keydown", handleEsc);
//     };
//   }, [isOpen, onClose]);

//   if (!isOpen) {
//     return null;
//   }

//   const { name, price, rating, location, gallery, description, reviews } = camper;
//   const reviewText = `${rating} (${reviews.length} Reviews)`;

//   return ReactDOM.createPortal(
//     <div className={styles.backdrop} onClick={onClose}>
//       <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
//         <div className={styles.modalHeader}>
//           <h2 className={styles.modalTitle}>{name}</h2>
//           <Icon name="icon-close" className={styles.iconClose} onClick={onClose} />
//         </div>
//         <div className={styles.modalContent}>
//           <div className={styles.modalInfo}>
//             <div className={styles.modalRating}>
//               <Icon name="icon-star" className={styles.iconStar} />
//               <p className={styles.textRew}>{reviewText}</p>
//             </div>
//             <div className={styles.modalLocation}>
//               <Icon name="icon-location" className={styles.iconLocation} />
//               <p className={styles.textLocation}>{location}</p>
//             </div>
//           </div>
//           <p className={styles.modalPrice}>€ {price},00</p>
//           <div className={styles.modalGallery}>
//             {gallery.map((src, index) => (
//               <img key={index} src={src} alt={`${name} ${index + 1}`} className={styles.modalImage} />
//             ))}
//           </div>
//           <p className={styles.modalDescription}>{description}</p>
//         </div>
//       </div>
//     </div>,
//     document.body
//   );
// };

// export default Modal;

// c features и Reviews  но не работает как надо************************************
// import React, { useState } from "react";
// import styles from "./modal.module.css";
// import Icon from "../Icon/Icon";
// import Features from "../Features/Features";
// import Reviews from "../Reviews/Reviews";

// const Modal = ({ isOpen, onClose, camper }) => {
//   const [activeTab, setActiveTab] = useState(null);
//   const { name, price, gallery, rating, location, description, reviews } = camper;
//   const reviewText = `${rating} (${reviews.length} Reviews)`;

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className={`${styles.modal} ${isOpen ? styles.open : ""}`}>
//       <div className={styles.overlay} onClick={onClose}></div>
//       <div className={styles.content}>
//         <button className={styles.closeButton} onClick={onClose}>
//           <Icon name="icon-close" className={styles.iconClose} />
//         </button>
//         <div className={styles.container}>
//           <div className={styles.image} style={{ backgroundImage: `url(${gallery[0]})` }}></div>
//           <div className={styles.description}>
//             <h2 className={styles.title}>{name}</h2>
//             <p className={styles.price}>€ {price},00</p>
//             <div className={styles.reviews}>
//               <div className={styles.star}>
//                 <Icon name="icon-star" className={styles.iconStar} />
//                 <p className={styles.textRew}>{reviewText}</p>
//               </div>
//               <div className={styles.location}>
//                 <Icon name="icon-location" className={styles.iconLocation} />
//                 <p className={styles.textLocation}>{location}</p>
//               </div>
//             </div>
//             <p className={styles.textSupport}>{description}</p>
//             <div className={styles.links}>
//               <button className={styles.link} onClick={() => handleTabClick("features")}>
//                 Features
//               </button>
//               <button className={styles.link} onClick={() => handleTabClick("reviews")}>
//                 Reviews
//               </button>
//             </div>
//             {activeTab === "features" && <Features />}
//             {activeTab === "reviews" && <Reviews />}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;



// 3вар*****************************************************отлично працюэ но без крестикати
// import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
// import styles from "./modal.module.css";
// import Icon from "../Icon/Icon";
// import Features from "../Features/Features";
// import Reviews from "../Reviews/Reviews";

// const Modal = ({ isOpen, onClose, camper }) => {
//   const [activeTab, setActiveTab] = useState(null);
//   const [showFeatures, setShowFeatures] = useState(false);
//   const [showReviews, setShowReviews] = useState(false);

//   useEffect(() => {
//     const handleEsc = (event) => {
//       if (event.keyCode === 27) {
//         onClose();
//       }
//     };

//     if (isOpen) {
//       document.addEventListener("keydown", handleEsc);
//     } else {
//       document.removeEventListener("keydown", handleEsc);
//     }

//     return () => {
//       document.removeEventListener("keydown", handleEsc);
//     };
//   }, [isOpen, onClose]);

//   if (!isOpen) {
//     return null;
//   }

//   const { name, price, gallery, rating, location, description, reviews } = camper;
//   const reviewText = `${rating} (${reviews.length} Reviews)`;

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     if (tab === "features") {
//       setShowFeatures(true);
//       setShowReviews(false);
//     } else if (tab === "reviews") {
//       setShowReviews(true);
//       setShowFeatures(false);
//     }
//   };

//   return ReactDOM.createPortal(
//     <div className={styles.backdrop} onClick={onClose}>
//       <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
//         <div className={styles.modalHeader}>
//           <h2 className={styles.modalTitle}>{name}</h2>
//           <Icon name="icon-close" className={styles.iconClose} onClick={onClose} />
//         </div>
//         <div className={styles.modalContent}>
//           <div className={styles.modalInfo}>
//             <div className={styles.modalRating}>
//               <Icon name="icon-star" className={styles.iconStar} />
//               <p className={styles.textRew}>{reviewText}</p>
//             </div>
//             <div className={styles.modalLocation}>
//               <Icon name="icon-location" className={styles.iconLocation} />
//               <p className={styles.textLocation}>{location}</p>
//             </div>
//           </div>
//           <p className={styles.modalPrice}>€ {price},00</p>
//           <div className={styles.modalGallery}>
//             {gallery.map((src, index) => (
//               <img key={index} src={src} alt={`${name} ${index + 1}`} className={styles.modalImage} />
//             ))}
//           </div>
//           <p className={styles.modalDescription}>{description}</p>
//           <div className={styles.modalButtons}>
//             <button className={styles.modalButton} onClick={() => handleTabClick("features")}>
//               Features
//             </button>
//             <button className={styles.modalButton} onClick={() => handleTabClick("reviews")}>
//               Reviews
//             </button>
//           </div>
//           {showFeatures && <Features style={{ marginTop: "44px" }} />}
//           {showReviews && <Reviews style={{ marginTop: "44px" }} />}
//         </div>
//       </div>
//     </div>,
//     document.body
//   );
// };

// export default Modal;



import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import Icon from "../Icon/Icon";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";

const Modal = ({ isOpen, onClose, camper }) => {
  const [activeTab, setActiveTab] = useState(null);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    } else {
      document.removeEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const { name, price, gallery, rating, location, description, reviews } = camper;
  const reviewText = `${rating} (${reviews.length} Reviews)`;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "features") {
      setShowFeatures(true);
      setShowReviews(false);
    } else if (tab === "reviews") {
      setShowReviews(true);
      setShowFeatures(false);
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{name}</h2>
          <Icon name="icon-close" className={styles.iconClose} onClick={onClose} />
        </div>
        <div className={styles.modalContent}>
          <div className={styles.modalInfo}>
            <div className={styles.modalRating}>
              <Icon name="icon-star" className={styles.iconStar} />
              <p className={styles.textRew}>{reviewText}</p>
            </div>
            <div className={styles.modalLocation}>
              <Icon name="icon-location" className={styles.iconLocation} />
              <p className={styles.textLocation}>{location}</p>
            </div>
          </div>
          <p className={styles.modalPrice}>€ {price},00</p>
          <div className={styles.modalGallery}>
            {gallery.map((src, index) => (
              <img key={index} src={src} alt={`${name} ${index + 1}`} className={styles.modalImage} />
            ))}
          </div>
          <p className={styles.modalDescription}>{description}</p>
          <div className={styles.modalButtons}>
            <button className={styles.modalButton} onClick={() => handleTabClick("features")}>
              Features
            </button>
            <button className={styles.modalButton} onClick={() => handleTabClick("reviews")}>
              Reviews
            </button>
          </div>
          {showFeatures && <Features style={{ marginTop: "44px" }} />}
          {showReviews && <Reviews style={{ marginTop: "44px" }} />}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
