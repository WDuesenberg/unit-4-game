$(document).ready(function() {
    var random = Math.floor(Math.random() * 101 + 19)

    $('#randomNumber').text(random);

    var num1 = Math.floor(Math.random() * 11 + 1)
    var num2 = Math.floor(Math.random() * 11 + 1)
    var num3 = Math.floor(Math.random() * 11 + 1)
    var num4 = Math.floor(Math.random() * 11 + 1)

    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    function reset() {
        random = Math.floor(Math.random() * 101 + 19);
        console.log(random)
        $('#randomNumber').text(random);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        userTotal = 0;
        $('#finalTotal').text(userTotal);
    }

    function yay() {
        alert("You won!");
        wins++;
        $('#numberWins').text(wins);
        reset();
    }

    function loser() {
        alert("You lose!");
        losses++;
        $('#numberLosses').text(losses);
        reset()
    }

    $('#one').on('click', function() {
        userTotal = userTotal + num1;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);

        if (userTotal == random) {
            yay();
        } else if (userTotal > random) {
            loser();
        }
    })
    $('#two').on('click', function() {
        userTotal = userTotal + num2;
        console.log("New userTotal = " + userTotal);
        $('#finalTotal').text(userTotal);

        if (userTotal == random) {
            yay();
        } else if (userTotal > random) {
            loser();
        }
    })

    $('#three').on('click', function() {
        userTotal = userTotal + num3;
        console.log("New userTotal = " + userTotal);
        $('#finalTotal').text(userTotal);

        if (userTotal == random) {
            yay();
        } else if (userTotal > random) {
            loser();
        }
    })

    $('#four').on('click', function() {
        userTotal = userTotal + num4;
        console.log("New userTotal = " + userTotal);
        $('#finalTotal').text(userTotal);

        if (userTotal == random) {
            yay();
        } else if (userTotal > random) {
            loser();
        }
    });
});











































// var targetNumber = 69;

// $("#number-to-guess").text(targetNumber);

// var counter = 0;

// //Now for the hard part. Creating multiple crystals each with their own unique number value.

// // We begin by expanding our array to include four options.
// var numberOptions = [9, 16, 20, 3];

// // Next we creat a for loop to create crystals for every numberOption.
// for (var i = 0; i < numberOptions.length; i++) {

//     var imageCrystal = $("<img>");
//     imageCrystal.addClass("crystal-image");
//     imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
//     imageCrystal.attr("data-crystalvalue", numberOptions[i]);
//     $("#crystals").append(imageCrystal);
// }

// $(".crystal-image").on("click", function() {
//     var crystalValue = ($(this).attr("data-crystalsvalue"));
//     crystalValue = parseInt(crystalValue);
//     counter += crystalValue;
//     alert("New score: " + counter);

//     if (counter === targetNumber) {
//         alert("You win!");
//     } else if (counter >= targetNumber) {
//         alert("You lose!!");
//     }

// });