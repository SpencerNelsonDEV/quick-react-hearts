import React from "react";
import Heart from "./components/Heart";
import NewHearts from "./components/NewHearts";
import RandomHearts from "./components/RandomHearts";

const App = () => {
  return (
    <div>
      {/* <Heart top={200} left={800} /> */}
      {/* <NewHearts /> */}
      <RandomHearts />
    </div>
  );
};

export default App;
