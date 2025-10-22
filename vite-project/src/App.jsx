import { createContext, useContext, useState } from "react";
// step:1 defined createcontext
const BulbContext = createContext();

function App() {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <div>
      <h1>Here am learning context api</h1>
      <div>
        <BulbContext.Provider value={{ bulbOn, setBulbOn, name: "soro" }}>
          <Light></Light>
        </BulbContext.Provider>
      </div>
    </div>
  );
}

function Light() {
  const { name } = useContext(BulbContext);
  return (
    <div>
      {name}
      <BulbOn></BulbOn>
      <ToggleBulb></ToggleBulb>
    </div>
  );
}
function BulbOn() {
  const { bulbOn } = useContext(BulbContext);
  return <div>{bulbOn ? "Bulb ON" : "Bulb OFF"}</div>;
}
function ToggleBulb() {
  const { bulbOn, setBulbOn } = useContext(BulbContext);
  function switchOnOff() {
    setBulbOn(!bulbOn);
  }
  return (
    <div>
      <button onClick={switchOnOff}>Toggle</button>
    </div>
  );
}

export default App;
