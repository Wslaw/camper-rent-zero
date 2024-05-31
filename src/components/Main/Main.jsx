import Button from "../Button/Button";
import CampersList from "../CampersList/CampersList";
import items from "../../data/campers.json";

const Main = () => {
  return (
    <main>
      <h2> Main</h2>
      <p>Main description</p>
      <Button text="Click-me" type="button"/>
      <Button text="Request" type="submit" />
      
      <Button text="Send" type="submit" />
      
      <CampersList title="Best camper of year!" items={items} />
      {/* <CampersList title="Best camper of year!" /> */}
    </main>
  );
};

export default Main;