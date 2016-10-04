


// $("button").on("click", function() {
//   var info = $("input").val();
//   $("h2").text(info);
//   $("input").val(" ");
//   $("p").eq(number).show();

var randNumber = Math.floor((Math.random() * 100) + 1)
console.log(randNumber);
// console.log(guess);

function guessNum() {
  var guess = parseInt($("input").val());
  var wrongCount = 0;
  console.log(guess);


  if  ((guess) !== NaN) {
    // wrongCount = wrongCount + 1;
    $("p").text("ONLY NOMBRES DUDE!!!");

  };

  if ((guess) < randNumber) {
    // wrongCount = wrongCount + 1;

    $("p").text("Too Low, try again please.");
  }
  //if statement determines if guessed string is too low

  if ((guess) > randNumber) {
    // TODO: Add pargraph text
    // wrongCount = wrongCount + 1;
    $("p").text("Too High, try again please.");
  }
  //if statement determines if guessed string is too high

  if ((guess) === randNumber) {
    $("p").text("Winner winner chicken dinner");
  };



  // };

  // if (wrongCount === 6){
  //           // TODO: Add pargraph text
  //       $("p").text("Game Over, maybe next time");
  // }


  //if statement alerts "winner" when user guesses the right string
};


$(document).ready(function() {
  $("button").on("click", function() {
  guessNum();


  });
});
