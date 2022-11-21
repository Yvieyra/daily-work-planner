// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var hourNineEl = $('#9');
var hourTenEl = $('#10');
var hourElevenEl = $('#11');
var hourTwelveEl = $('#12');
var hourOneEl = $('#13');
var hourTwoEl = $('#14');
var hourThreeEl = $('#15');
var hourFourEl = $('#16');
var hourFiveEl = $('#17');

var pastClassEl = $('.past');
var presentClassEl = $('.present');
var futureClassEl = $('.future');


var times = [hourNineEl[0].id, hourTenEl[0].id, hourElevenEl[0].id, hourTwelveEl[0].id, hourOneEl[0].id, hourTwoEl[0].id, hourThreeEl[0].id, hourFourEl[0].id, hourFiveEl[0].id];
var currentHour = dayjs().hour(); // gets current hour Accepts numbers from 0 to 23


$(function () {
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMM D, YYYY'));
});
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?


// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
$(document).ready(function () {
  for (let i = 0; i < times.length; i++) {
    if (currentHour == times[i]) {
      $(`#${times[i]}`).addClass('present')
      // $("#" + times[i]).addClass('present')
    }
    if (currentHour > times[i]) {
      $(`#${times[i]}`).addClass('past')
    }
    if (currentHour < times[i]) {
      $(`#${times[i]}`).addClass('future')
    }
  }
});

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  //




