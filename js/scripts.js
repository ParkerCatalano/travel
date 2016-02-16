//var destinations = ["Bahamas", "Italy", "Paris", "Costa Rica", "Belgium"]

//to combine arrays: var_name.concat//
//to add elements to array: var_name.push//
//to access element in array: var_name[0]/[2] etc.//
//methods like pop(), reverse(), and push()//

$(document).ready(function() {
  $('#blanks form').submit(function() {
    var blanks = ["question1", "question2", "question3", "question4", "question5"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);

    });

    $('#result').show();

    event.preventDefault();
  });
});
