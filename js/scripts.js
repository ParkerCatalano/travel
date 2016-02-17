//var destinations = ["Bahamas", "Italy", "Paris", "Costa Rica", "Belgium"]

//to combine arrays: var_name.concat//
//to add elements to array: var_name.push//
//to access element in array: var_name[0]/[2] etc.//
//methods like pop(), reverse(), and push()//

$(document).ready(function() {
  $("form#travel").submit(function(event) {
    var favPast = $("input#favPast").val();
    var favWeath = $("input#favWeath").val();
    var favShop = $("input#favShop").val();
    var age = parseInt($("input#age").val());
    var favFood = $("input#favFood").val();
    var gender = $("select#gender").val();


    var dest = (" this destination");


    $("#loca").text(dest);
    $("#dest").show()

    event.preventDefault();
  });
});
