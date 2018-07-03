// user interface logic
$(document).ready(function() {
  $("#ticket-price").submit(function(event){
    event.preventDefault();
    var inputtedMovieTitle = $("#movie-title").val();
    var inputtedMovieTime = $("#movie-time").val();
    var inputtedAge = parseInt($("#age").val());
    var ticketPrice = new Ticket(inputtedMovieTitle, inputtedMovieTime, inputtedAge);
