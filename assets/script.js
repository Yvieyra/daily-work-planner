// got element identifiers using Jquery syntax
var hourNineEl = $('#9');
var hourTenEl = $('#10');
var hourElevenEl = $('#11');
var hourTwelveEl = $('#12');
var hourOneEl = $('#13');
var hourTwoEl = $('#14');
var hourThreeEl = $('#15');
var hourFourEl = $('#16');
var hourFiveEl = $('#17');

//array of time blocks in ID form gets current hour and accepts numbers from 0 to 23
var times = [hourNineEl[0].id, hourTenEl[0].id, hourElevenEl[0].id, hourTwelveEl[0].id, hourOneEl[0].id, hourTwoEl[0].id, hourThreeEl[0].id, hourFourEl[0].id, hourFiveEl[0].id]; 
var currentHour = dayjs().hour(); 

var userInput;
var timeId;

//function below adds the date to the top of my webpage
$(function () {
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMM D, YYYY'));
});
// added event listener for the click button to save user input into local storage. 
$("button").click(function () {
  userInput = ($(this).siblings('.description').val()); //gets value of the text typed in the textarea element 
  timeId = ($(this).parents().attr("id")); //gets value of attribute Id
  localStorage.setItem(timeId, userInput) //stored value of attribute id and the text typed in the textarea element in the local storage as a key, value pair. 
});
// This code loops through my hour identifiers until it matches the current hour of the day. 
//The if statements below are to determine what class each section will be depending on the hour of the day. 
$(document).ready(function () {
  for (let i = 0; i < times.length; i++) {
    if (currentHour == times[i]) {
      $(`#${times[i]}`).addClass('present')
      // $("#" + times[i]).addClass('present') // combines the identifier Id attribute with the time index in my array of times. 
    }
    if (currentHour > times[i]) {
      $(`#${times[i]}`).addClass('past')
    }
    if (currentHour < times[i]) {
      $(`#${times[i]}`).addClass('future')
    }
  }
});
// Code gets items from local storage 
$(document).ready(function () {
  $(".description").each(function() { //interated through the description classes of each section in HTML
  savedData = ($(this).parents().attr("id").toString()); //pulls value of the Id elemnts it iterates through and turns the numbers into strings.
    $("#"+savedData+" .description").val(localStorage.getItem(savedData)); // combines Id attribute with the savedData value and description class where user input is stored.
  })
  });
