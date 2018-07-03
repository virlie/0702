// user interface logic
$(document).ready(function() {
  $("#ticket-price").submit(function(event){
    event.preventDefault();
    var inputtedMovieTitle = $("#movie-title").val();
    var inputtedMovieTime = $("#movie-time").val();
    var inputtedAge = parseInt($("#age").val());
    var ticketPrice = new Ticket(inputtedMovieTitle, inputtedMovieTime, inputtedAge);

    var ageDiscount = ticketPrice.ageDiscount();
    var timeDiscount = ticketPrice.timeDiscount();
    var movieDiscount = ticketPrice.movieDiscount();
    var outputPrice = Math.min(ageDiscount, timeDiscount, movieDiscount);

   $(".movie-title").text(inputtedMovieTitle);
   $(".movie-time").text(inputtedMovieTime);
   $("ul#price").append("$" + outputPrice);
 });
});

//business logic
function Ticket(title, time, age) {
  this.title = title;
  this.time = time;
  this.age = age;
  this.price = 10;
}


// Discount Prototypes
Ticket.prototype.timeDiscount = function() {
  if (this.time === "Early Bird (before Noon)") {
    this.price -= 3;
  } else if (this.time === "Matinee (Noon-5pm)") {
    this.price -= 3;
  } else {
    this.price = 10;
  }
  return + this.price;
};

Ticket.prototype.ageDiscount = function() {
  if (this.age <= 12) {
    this.price -= 3;
  } else if (this.age >= 65) {
    this.price -= 5;
  } else {
    this.price = 10;
  }
  return this.price;
};

Ticket.prototype.movieDiscount = function() {
  if (this.title === "") {
    this.price -= 6;
  } else if (this.title === "Avengers Infinity War") {
    this.price += 2;
  } else {
    this.price = 10;
  }
  return this.price;
};
