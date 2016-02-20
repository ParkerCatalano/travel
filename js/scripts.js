$(document).ready(function() {

  $favPast = $('#favPast')
  $favWeath = $('#favWeath')
  $favFood = $('#favFood')
  $favShop = $('#favShop')
  $gender = $('#gender')

  $("button").click(function() {

    if($favPast.val() === true) {
      $("#dest2").show();
    }
    // clear inputs when you're all done
    $favPast.empty()
    $favWeath.empty()
    $favShop.empty()
    $favFood.empty()
  })
})
