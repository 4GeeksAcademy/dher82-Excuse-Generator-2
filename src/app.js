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
  console.log(randomWho);

  console.log(who[randomWho]);
  //acá termina el who//

  let randomaction = Math.floor(Math.random() * action.length);
  console.log(randomaction);

  console.log(action[randomaction]);

  //acá termina action//
  let randomwhat = Math.floor(Math.random() * what.length);
  console.log(randomwhat);

  console.log(what[randomwhat]);
  //acá termina what
  let randomwhen = Math.floor(Math.random() * when.length);
  console.log(randomwhen);

  console.log(when[randomwhen]);
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
