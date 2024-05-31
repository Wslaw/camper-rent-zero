import "./campers-list.css"
import CampersListItem from "./CampersListItem";

// const CampersList = ({ title, items}) => {
const CampersList = ({ title, items = [] }) => {
    
    // const elements = items.map(item => (
    //     <CampersListItem key={item._id} name={item.name } price={item.price} gallery={item.gallery} />
         const elements = items.map(({_id, ...rest}) => (
        <CampersListItem key={_id}{...rest} />
    ));
    return (
        <>
           {title && <h1>{title}</h1>}
        <ul className="campers-list">
          {elements}
            </ul>
      </>
    );
};

export default CampersList;