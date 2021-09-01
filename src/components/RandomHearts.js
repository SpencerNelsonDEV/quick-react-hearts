import React from "react";
import Heart from "./Heart.js";

const randomNum = () => {
  return Math.floor(Math.random() * 500) + 50;
};

const RandomHearts = () => {
  return (
    <div>
      <Heart top={randomNum()} left={randomNum()} />
      <Heart top={randomNum()} left={randomNum()} />
      <Heart top={randomNum()} left={randomNum()} />
    </div>
  );
};

export default RandomHearts;
