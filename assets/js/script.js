// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
// This puts the current date at the top of the page.

  dayDisplay = dayjs();
  $("#currentDay").text(dayDisplay.format("dddd, MMMM D YYYY"));

// This adds a class depending on the current hour and corresponding hour on the schedule. It changes the color for past, present, and future tasks. 
  var currentTime = dayjs().hour();

  $('.time-block').each(function () {

    var timeEl = $(this).attr("data-hour");

    if (timeEl < currentTime) {
      $(this).addClass("past");
      $(this).removeClass("present");
    } else if (timeEl === currentTime) {
      $(this).addClass("present");
      $(this).removeClass("past");
    } else {
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
    }
  
  })

  // Saves the text within each hour to local storage upon clicking the "save" button.
  var saveButtonEl = $('.saveBtn');

  saveButtonEl.on('click', function () {
    var currentHour = this.dataset.hour;
    var task = $(`#text-${currentHour}`)[0].value;
    localStorage.setItem(`key-${currentHour}`, task);
  }
  )

  // Displays saved tasks from local storage in the text boxes for the corresponding hours.
  savedTask9 = localStorage.getItem(`key-9`)
  $(`#text-9`)[0].value = savedTask9
  savedTask10 = localStorage.getItem(`key-10`)
  $(`#text-10`)[0].value = savedTask10
  savedTask11 = localStorage.getItem(`key-11`)
  $(`#text-11`)[0].value = savedTask11
  savedTask12 = localStorage.getItem(`key-12`)
  $(`#text-12`)[0].value = savedTask12
  savedTask13 = localStorage.getItem(`key-13`)
  $(`#text-13`)[0].value = savedTask13
  savedTask14 = localStorage.getItem(`key-14`)
  $(`#text-14`)[0].value = savedTask14
  savedTask15 = localStorage.getItem(`key-15`)
  $(`#text-15`)[0].value = savedTask15
  savedTask16 = localStorage.getItem(`key-16`)
  $(`#text-16`)[0].value = savedTask16
  savedTask17 = localStorage.getItem(`key-17`)
  $(`#text-17`)[0].value = savedTask17

});
