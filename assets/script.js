//global variables
var time = moment().format("HH:mm:ss");
var timeOfDay = $(".time-of-day");
var currentHour = parseInt(moment().format("H"))
var text8 = $("#text-8");

//displays currnet day/month on scheduler
var currentDay = moment().format("ddd MMM Do");
$("#currentDay").text(currentDay);


//for loop and if statment for time being past or future
//gets current hour from moment.js
function hourUpdater() {
  for (let i = 8; i < 17; i++) {
    // console.log(currentHour, i)
    var currentRow = document.querySelector(`#text-${i}`)
    if (currentHour === i) {
      currentRow.classList.add("present");
  } else if (currentHour < i) {
      // future
      currentRow.classList.add("future")
      //past
  } else  (currentHour > i)
    currentRow.classList.add("past")
  }
}

//click save button to save event to local storage
//only 8am works, i couldnt get to the part of making them all work without writing a new function for each of id.
// Id prefer to not do it, than do it the long and wrong way.

function saveInfo() {
  var dailyActivity8 = text8.val()
  localStorage.setItem("activity8", dailyActivity8);
}
function retrieveInfo(){
  var savedInfo = localStorage.getItem("activity8")
  text8.text(savedInfo);

}

$(".saveBtn").click(saveInfo);


//functions that go with page load 
retrieveInfo()
hourUpdater()
