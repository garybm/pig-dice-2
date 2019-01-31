// var player1=" ";
// var player2=" ";
//
//
//
// var roll = diceRoll();
// function diceRoll() {
//   return Math.floor(6*Math.random())+1;
// }
//
// console.log(diceRoll());
//
// function Player() {
//   this.name = 0;
//   this.roundTotal = 0;
//   this.total = 0;
// }
//
// Player.prototype.rollone = function() {
//   if(roll === 1) {
//     return this.roundTotal = 0;
//   }else {
//
//   }
// }
//
function Player() {
  this.roundTotal = 0;
  this.total = 0;
}


function diceRoll() {
  var roundTotal = document.getElementById("roundTotal");
  var status = document.getElementById("status");
  var die = Math.floor(Math.random() * 6)+1;
  console.log(die);
  roundTotal.innerHTML = die;
  status.innerHTML = "You rolled: "+ die+"." ;

}

//   if(die === 1){
//         roundTotal.innerHTML += "0";
//     }
//     else if (die !== 1){
//           roundTotal.innerHTML =;
//       }
// }
console.log(status);



// for(var i !== 1, i > 1, i++) {
//   return roundTotal += die;
// }else {
//   return roundTotal = 0;
// }
//
// if(diceRoll() === 1) {
//   return roundTotal = 0;
// }else(diceRoll() > 1 && diceRoll() <=6){
//   return
//
// }



//UI logic//
 $(document).ready(function(){
   var roll = diceRoll();

   $("#playerName").submit(function(event) {
     event.preventDefault();
     var player1 = $("input#nameOne").val();
     var player2 = $("input#nameTwo").val();
     $(".nameOne").text(player1);
     $(".nameTwo").text(player2);



     $("#nameChart").show();
     $("#playerName").hide();
     $("#pinkWell").hide();



   });

   $("#rollDice").click(function() {
     $("#status").text(diceRoll());


   });
});



// Player1.
//
//
// console.log (Player1)
//
// Player1.roundTotal+= diceRoll();
//
// console.log(Player1);
//
// Player1.total+= Player1.roundTotal;
//
// console.log(Player1);


 //
 // if(diceRoll() === 1) {
 //   Player1.roundTotal = 0;
 // } else {
 //   Player1.roundTotal += diceRoll();
 // }
