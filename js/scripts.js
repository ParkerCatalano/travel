//var destinations = ["Bahamas", "Italy", "Paris", "Costa Rica", "Belgium"]

//to combine arrays: var_name.concat//
//to add elements to array: var_name.push//
//to access element in array: var_name[0]/[2] etc.//
//methods like pop(), reverse(), and push()//

$(document).ready(function() {
  $("form#travel").submit(function(event) {
  var travel = ["favPast","favWeath", "favFood", "favShop", "age", "gender"];

  var destination = ["Venice, Italy", "Sao Paulo, Brazil", "Istanbul, Turkey"];
    

    $("#loca").text(destination[2]);
    $("#dest").show()

    event.preventDefault();
  });
});
