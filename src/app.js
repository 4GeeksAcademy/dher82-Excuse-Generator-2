/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const who = ["The dog", "My grandma", "His turtle", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "the keys", "the car"];
  const when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  const excuse = generateExcuse(who, action, what, when);

  document.querySelector(".excuse").innerHTML = excuse;
  const p = document.getElementById("parrafo");
  p.innerText = "Guess What Happened!";
};

const getRandomElement = array =>
  array[Math.floor(Math.random() * array.length)];

const generateExcuse = (who, action, what, when) => {
  const randomWho = getRandomElement(who);
  const randomAction = getRandomElement(action);
  const randomWhat = getRandomElement(what);
  const randomWhen = getRandomElement(when);

  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
};
