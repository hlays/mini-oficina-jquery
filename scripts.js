$(document).ready(function(){

  $(".js-toggle-button").click(function(){
    $(".js-header-text").toggleClass("hidden");
  });

  $(".js-button-text").click(function() {
    const text = $(".js-input").val();
    $(".js-list").append(`<li>${text}</li>`);
  });

  [1,2,3,4,5,6].forEach(value => {
    if (value % 2 == 0) {
      $(".js-list").append(`<li>${value}</li>`)
    }
  });

});
