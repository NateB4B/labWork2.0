"use strict";

const mainHead = document.querySelector("#date");
const dateInput = document.querySelector("#datePicker");
const colorPicker = document.querySelector("#colour");
const value = document.querySelector("#the-value");
const theRange = document.querySelector("#range");

dateInput.addEventListener("change", setDate);
function setDate(){
  const d = new Date(dateInput.value);
  //console.log(d);
  mainHead.innerText = d.toDateString();
}
let today = new Date();
 mainHead.innerHTML = today.toDateString();


 //TASK 3
function setColor(){
  let c = colorPicker.value;
  value.style.background = c;
}

colorPicker.addEventListener("change", setColor);
// TASK4
const showRange = () => {
    let r = theRange.value;
  	// note: the '%' unit is essential
  	let rangeUnit = `${r}%`;
    value.style.width = rangeUnit;
  	value.innerText = rangeUnit;
  }
  theRange.addEventListener("input", showRange);
