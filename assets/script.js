//global variables
var time = moment().format("HH:mm:ss");
var timeOfDay = $(".time-of-day")
console.log(timeOfDay)

//===========================================================
//displays currnet day/month on scheduler
var currentDay = moment().format("ddd MMM Do");
$("#currentDay").text(currentDay);

//===========================================================
//for loop and if statment for time being past or future
//get current hour from moment 
function hourUpdater() {
  for (let i = 0; i < timeOfDay.length; i++) {
    if (time >= timeOfDay[i]) {
      console.log(timeOfDay)
      changeColorGray();
    }
  }
    // var  allClassPresent = $(".present");
    // $(".container").find( allClassPresent).attr("present", "past");

    document.querySelector(".event").classList.remove("present");
    document.querySelector(".event").classList.add("past");

    // function chnageColorGreen() {
    //   document.querySelector(".event").classList.remove("present");
    //   document.querySelector(".event").classList.add("future");}
}
hourUpdater()
//==========================================================
//click event to be able to enter

$("").click(function () {
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  // document.body.appendChild(input);
  console.log("these will trigger an input box, possibly modal?");
});

//=========================================================
//click save button to save event to local storage
//
var dailyActivity = $(".saveBtn").click(function () {
  console.log("This will save the document in localstorage");
  localStorage.setItem("activity", dailyActivity);
});

//=========================================================
//when i refresh the page the saved event presists
