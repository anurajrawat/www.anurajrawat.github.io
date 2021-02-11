$(document).ready(() => {
  // As user scrolls down, reduce opacity of scroll caret
  $(window).scroll(function() {
    $("#caret").css("opacity", 1 - $(window).scrollTop() / 500);
  });
});
