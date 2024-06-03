// import styles from "./campersList.module.css";
// import CampersListItem from "./CampersListItem.jsx";

// const CampersList = ({  items = [] }) => {
    
//          const elements = items.map(({_id, ...rest}) => (
//         <CampersListItem key={_id}{...rest} />
//     ));
//     return (
//         <div className={styles.list}>
//         <ul className={styles.campersList}>
//           {elements}
//             </ul>
//       </div>
//     );
// };

// export default CampersList;



// import React from "react";
// import CampersListItem from "./CampersListItem";
// import styles from "./campersList.module.css";

// const CampersList = ({ campers }) => {
//   return (
//     <ul className={styles.campersList}>
//       {campers.map((camper) => (
//         <CampersListItem
//           key={camper.id}
//           name={camper.name}
//           price={camper.price}
//           gallery={camper.gallery}
//           rating={camper.rating}
//           location={camper.location}
//           adults={camper.adults}
//           transmission={camper.transmission}
//           engine={camper.engine}
//           description={camper.description}
//           reviews={camper.reviews}
//           details={camper.details}
//         />
//       ))}
//     </ul>
//   );
// };

// export default CampersList;

// варіант 1 с campers
// import styles from "./campersList.module.css";
// import CampersListItem from "./CampersListItem.jsx";

// const CampersList = ({ campers = [] }) => {
    
//          const elements = campers.map(({_id, ...rest}) => (
//         <CampersListItem key={_id}{...rest} />
//     ));
//     return (
//         <div className={styles.list}>
//         <ul className={styles.campersList}>
//           {elements}
//             </ul>
//       </div>
//     );
// };

// export default CampersList;


// Варіант 2 с модулямі
import React from "react";
import CampersListItem from "./CampersListItem";
import styles from "./campersList.module.css";

const CampersList = ({ campers }) => {
  return (
    <div className={styles.list}>
      <ul className={styles.campersList}>
        {campers.map((camper) => (
          <CampersListItem
            key={camper._id}
            name={camper.name}
            price={camper.price}
            gallery={camper.gallery}
            rating={camper.rating}
            location={camper.location}
            adults={camper.adults}
            transmission={camper.transmission}
            engine={camper.engine}
            description={camper.description}
            reviews={camper.reviews}
            details={camper.details}
          />
        ))}
      </ul>
    </div>
  );
};

export default CampersList;
