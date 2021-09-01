import React from "react";
import Heart from "./Heart.js";

const heartsArray = [
  [150, 250],
  [300, 450],
  [50, 100],
  [400, 100],
];

const NewHearts = () => {
  return (
    <div>
      <Heart top={heartsArray[0][0]} left={heartsArray[0][1]} />
      <Heart top={heartsArray[1][0]} left={heartsArray[1][1]} />
      <Heart top={heartsArray[2][0]} left={heartsArray[2][1]} />
      <Heart top={heartsArray[3][0]} left={heartsArray[3][1]} />
    </div>
  );
};

export default NewHearts;
