/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let name = ["the dog", "my granma", "his turtle", "my bird"];
  let action = ["eat", "pissed", "crushed", "broked"];
  let place = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let indicename = Math.floor(Math.random() * name.length);
  let indiceaction = Math.floor(Math.random() * action.length);
  let indiceplace = Math.floor(Math.random() * place.length);

  document.querySelector("#excuse").innerHTML =
    name[indicename] + " " + action[indiceaction] + " " + place[indiceplace];
  console.log("Hello rigo from the console!");
};
