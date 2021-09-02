import React from "react";
import Heart from "./Heart.js";

const randomNum = () => {
  return Math.floor(Math.random() * 500) + 50;
};

const randomNumArray = Array.from({ length: 3 }, (element, index) => {
  const top = randomNum();
  const left = randomNum();
  return {
    top,
    left,
  };
});

const numLeft = randomNumArray.map((num) => num.left);
const numTop = randomNumArray.map((num) => num.top);

const RandomHearts = () => {
  return (
    <div>
      <Heart top={numTop[0]} left={numLeft[0]} />
      <Heart top={numTop[1]} left={numLeft[1]} />
      <Heart top={numTop[2]} left={numLeft[2]} />
    </div>
  );
};

export default RandomHearts;
