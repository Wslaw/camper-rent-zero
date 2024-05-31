import "./campers-list.css"

const CampersList = ({ title, items }) => {
    const elements = items.map(item => 
                  <li key={item._id} className="campers-list-items">
                    {item.name}, {item.price}
                  </li>

)


    return (
        <>
            <h1>{title}</h1>
        <ul className="campers-list">
          {elements}
            </ul>
      </>
    );
};

export default CampersList;