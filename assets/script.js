//global variables
var time = moment().format("HH:mm:ss")
var endOfHour = ["08:59:59","09:59:59","10:59:59","11:59:59","12:59:59","13:59:59","14:59:59","15:59:59","16:59:59"]
var startOfHour = ["8:00:00","9:00:00","10:00:00","11:00:00","12:00:00","13:00:00","14:00:00","15:00:00","16:00:00","17:00:00"]

//===========================================================
//displays currnet day/month on scheduler
var currentDay = moment().format("ddd MMM Do")
$("#currentDay").text(currentDay);

//===========================================================
//for loop and if statment for time being past or future
for (var j = 0; j < startOfHour.length; j++) {
 if (time <= startOfHour[j]){
    // chnageColorGreen();
 }}

for (let i = 0; i < endOfHour.length; i++) {
 if (time >= endOfHour[i]) {
    changeColorGray();
  }}
function changeColorGray() {
  // var  allClassPresent = $(".present");
  // $(".container").find( allClassPresent).attr("present", "past");

  document.querySelector(".event").classList.remove("present");
  document.querySelector(".event").classList.add("past");

// function chnageColorGreen() {
  // document.querySelector(".event").classList.remove("present");
  // document.querySelector(".event").classList.add("future");}
}

//==========================================================
//click event to be able to enter 

var dailyActivity = 

  
  $( ".target" ).click(function() {
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    // document.body.appendChild(input);
   console.log("these will trigger an input box, possibly modal?")
  });

//=========================================================
//click save button to save event to local storage
//
$( ".saveBtn" ).click(function() {
  console.log("This will save the document in localstorage")
localStorage.setItem("activity", dailyActivity)
});



//=========================================================
//when i refresh the page the saved event presists