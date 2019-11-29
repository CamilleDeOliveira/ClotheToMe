$(document).ready(function () {

  // MENU BURGER
  $("div#menu").hide();
  $("#hamburger").on('click', function () {
    $("div#menu").slideDown();
  });
  $("#close").on('click', function () {
    $("div#menu").slideUp();
  });

  // ON CLICK APPARITION MAP
  $("div#overlay").on('click', function () {
    $("div#overlay").hide();
    $("div#map").css({
      "z-index" : "0"
    });
    $(".content-title-app").css({
      "display" : "none"
    });
  });
})
