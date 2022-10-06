//global variables
var time = moment().format("HH:mm:ss");
var timeOfDay = $(".time-of-day");
var currentHour = parseInt(moment().format("H"))
var text8 = $("#text-8");
// console.log(timeOfDay)

//===========================================================
//displays currnet day/month on scheduler
var currentDay = moment().format("ddd MMM Do");
$("#currentDay").text(currentDay);

//===========================================================
//for loop and if statment for time being past or future
//get current hour from moment 
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


//=========================================================
//click save button to save event to local storage
//
function saveInfo() {
  var dailyActivity = text8.val()
  localStorage.setItem("activity", dailyActivity);
}

function retrieveInfo() {
  var savedInfo = localStorage.getItem("activity")
  text8.text(savedInfo);
   var dailyActivity = text8.val()
  localStorage.setItem("activity", dailyActivity);
}



$(".saveBtn").click(saveInfo);
retrieveInfo()
hourUpdater()
//===============================================
