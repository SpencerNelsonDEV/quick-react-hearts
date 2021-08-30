import React from "react";
import Heart from "./components/Heart";

const App = ({ top, left }) => {
  return (
    <div>
      <Heart top={100} left={90} />
      <Heart top={300} left={200} />
    </div>
  );
};

export default App;
