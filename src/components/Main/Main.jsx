import Button from "../Button/Button";
import CampersList from "../CampersList/CampersList";
import items from "../../data/campers.json";

const Main = () => {
  return (
    <main>
      <h2> Main</h2>
      <p>Main description</p>
      <Button text="Click-me" type="button" active={false} />
      <Button text="Send" type="submit" active />

      <CampersList title="Best camper of year!" items={items} />
      {/* <CampersList title="Best camper of year!" /> */}
    </main>
  );
};

export default Main;
