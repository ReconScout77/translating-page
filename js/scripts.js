$(document).ready(function() {
  $("button#goodmorning").click(function() {
    $("ul#user").prepend("<li>Good Morning!</li>");
    $("ul#yoko").prepend("<li><em>Ohaiyo Gozaimasu!</em></li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#yoko").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#goodnight").click(function() {
    $("ul#user").prepend("<li>Good Night!</li>");
    $("ul#yoko").prepend("<li><em>Oyasuminasai!</em></li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#yoko").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#cya").click(function() {
    $("ul#user").prepend("<li>See You Later!</li>");
    $("ul#yoko").prepend("<li><em>Jaa Mata Ne!</em></li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#yoko").children("li").first().click(function() {
      $(this).remove();
    });
  });
});
