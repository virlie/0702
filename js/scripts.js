// Business logic
function Ticket(age, movie, time) {
  this.age = age;
  this.movie = movie;
  this.time = time;
}

function ticketLogic(age, movie, time) {
  var ticketprice = 5;

  if (age < 18) {
    ticketprice += 0;
  } else if (age < 55) {
    ticketprice += 3;
  } else {
    ticketprice += 1.5;
  }
  if (movie === "premium") ticketprice += 3;
  if (time === "mat") ticketprice -= 1;
  ticketprice.toFixed(2);
  return ticketprice.toFixed(2);
}




//user interface logic
$(document).ready(function() {
  $("form#movie").submit(function(event) {
    event.preventDefault();
    var age = $("input#age").val();
    var movie = $("#movievalue").val();
    var time = $("#movietime").val();
    var ticket = new Ticket(age, movie, time);
    $("#price").append(ticketLogic(ticket.age, ticket.movie, ticket.time));
  })
})
