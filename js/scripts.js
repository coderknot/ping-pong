// Business Logic
var pingPong = function(number) {
  var numbers = [];

  for(var i = 1; i <= number; i++) {
    var replaceNumber = "";

    if(i % 15 === 0) {
      replaceNumber = "ping-pong";
      numbers.push(replaceNumber);
    } else if(i % 3 === 0) {
      replaceNumber = "ping";
      numbers.push(replaceNumber);
    } else if(i % 5 === 0) {
      replaceNumber = "pong";
      numbers.push(replaceNumber);
    } else {
      numbers.push(i);
    }
  }
  return numbers;
}

// User Interface Logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();

    $('#numbersList').empty();
    $("#numbers-showing").hide();
    $("#numbers-error").hide();
    $("#numbers-hidden").show();

    var number = parseInt($("#numberInput").val());

    if(jQuery.type(number === "number") && ((number !== number) === false)) {
      $("#numbers-hidden").hide();
      $("#numbers-showing").show();

      var numbers = pingPong(number);

      for(var i = 0; i < numbers.length; i++) {
        $("#numbersList").append("<li>" + numbers[i] + "</li>")
      }
    } else {
      $("#numbers-hidden").hide();
      $("#numbers-error").show();
    }

  });
});
