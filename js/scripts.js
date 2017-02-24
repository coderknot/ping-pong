// Business Logic
var pingPong = function(number) {

  var numbers = [];

  for(var i = 1; i <= number; i++) {

    var replaceNumber = "";

    if(i % 3 === 0) {
      replaceNumber = "ping";
      numbers.push(replaceNumber);
    } else if(i % 5 === 0) {
      replaceNumber = "pong";
      numbers.push(replaceNumber);
    } else {
      numbers.push(i);
    }

  }

  console.log(numbers);
  return numbers;

}

// User Interface Logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {

    event.preventDefault();
    $('#numbersList').empty();

    var number = parseInt($("#number").val());
    var numbers = pingPong(number);

    for(var i = 0; i < numbers.length; i++) {
      $("#numbersList").append("<li>" + numbers[i] + "</li>");
    }

    $("#output").show();

  });

});
