/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector(".excuse").innerHTML = generateExcuse();
  const p = document.getElementById("parrafo");

  p.innerText = "Guess What Happened!";
};
let generateExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let randomWho = Math.floor(Math.random() * who.length);

  let randomaction = Math.floor(Math.random() * action.length);

  let randomwhat = Math.floor(Math.random() * what.length);

  let randomwhen = Math.floor(Math.random() * when.length);

  return (
    who[randomWho] +
    " " +
    action[randomaction] +
    " " +
    what[randomwhat] +
    " " +
    when[randomwhen]
  );
};
