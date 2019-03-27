$(document).ready(function() {

  $(".js-toggle-button").click(function() {
    $(".js-header-text").toggleClass("hidden")
  });

  $(".js-button-text").click(eventinho);

});


function eventinho() {
  const text = $(".js-input").val();
  const num = parseInt(text);

  if (!isNaN(num)) {
    if (num % 2 == 0) {
      $(".js-list").append(`<li><h1>${num} é Par</h1></li>`)
    }
  }
  $(".js-input").val("");
}
