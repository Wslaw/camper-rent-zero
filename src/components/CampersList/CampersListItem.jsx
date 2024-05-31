import "./campers-list.css";

const CampersListItem = ({ name, price, gallery}) => {
  return (
      <li
               className="campers-list-items">
      <div>
        <img src={gallery[0]} alt="ico" />
      </div>
      <h4>{name}</h4>
      <p>Price: {price}</p>
    </li>
  );
};

export default CampersListItem;