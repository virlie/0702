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
