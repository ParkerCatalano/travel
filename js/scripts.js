//var destinations = ["Bahamas", "Italy", "Paris", "Costa Rica", "Belgium"]

//to combine arrays: var_name.concat//
//to add elements to array: var_name.push//
//to access element in array: var_name[0]/[2] etc.//
//methods like pop(), reverse(), and push()//

$(document).ready(function() {
  $("form#travel").submit(function(event) {
    var favPast = $("select#favPast").val();
    var favWeath = $("select#favWeath").val();
    var favFood = $("select#favFood").val();
    var favShop = $("select#favShop").val();
    var age = $("input#age").val();
    var gender = $("select#gender").val();


    var dest = ("this destination");


    $("#loca").text(dest);
    $("#dest").show()

    event.preventDefault();
  });
});
