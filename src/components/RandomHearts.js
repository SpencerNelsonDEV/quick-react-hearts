import React from "react";
import Heart from "./Heart.js";

const numHearts = Math.floor(Math.random() * 10) + 1;

const randomNum = () => {
  return Math.floor(Math.random() * 500) + 50;
};

const randomPositions = Array.from({ length: numHearts }, (element, index) => {
  const top = randomNum();
  const left = randomNum();
  return {
    top,
    left,
  };
});

// const numLeft = randomNumArray.map((num) => num.left);
// const numTop = randomNumArray.map((num) => num.top);

const RandomHearts = () => {
  return (
    <div>
      {randomPositions.map((pos, inx) => (
        <Heart top={pos.left} left={pos.top} />
      ))}
    </div>
  );
};

export default RandomHearts;
