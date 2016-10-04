var number = Math.floor(Math.random() * 3)

$(document).ready(function() {



  $("button").on("click", function() {
    var info = $("input").val();
    $("h2").text(info);
    $("input").val(" ");
    $("p").eq(number).show();
  });
});
