$(document).ready(function() {

  $favPast = $('#favPast')
  $favWeath = $('#favWeath')
  $favFood = $('#favFood')
  $favShop = $('#favShop')
  $gender = $('#gender')

  $('button').click(function(event) {

    if(($favPast.val() === true)||($favShop.val() === true)){
      $('#dest3').show();
    }
    else if ($favFood.val() === true) {
      $('#dest2'|| '#dest1').show();
    }
    else {
      $('#dest1').show();
    }
    // clear inputs when you're all done
    $favPast.empty()
    $favWeath.empty()
    $favShop.empty()
    $favFood.empty()

    event.preventDefault();
  })
})
