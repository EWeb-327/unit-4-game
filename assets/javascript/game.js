var min = 19;
var max = 120;
var targetNumber = Math.floor(Math.random() * (+max - +min) + +min);
$("#number-to-guess").text(targetNumber);

var counter = 0;
var wins = 0;
var losses = 0;

// Now for the hard part. Creating multiple crystals each with their own unique number value.

// We begin by expanding our array to include four options.
var numberOptions = [];
for (var j = 1; j < 5; j++) {
    var min = 1;
    var max = 12;
    var random = Math.floor(Math.random() * (+max - +min) + +min);
    numberOptions.push(random)
    console.log(numberOptions)

}
// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("#crystal1")
    var imageCrystal2 = $("#crystal2")
    var imageCrystal3 = $("#crystal3")
    var imageCrystal4 = $("#crystal4")
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[0]);
    imageCrystal2.attr("data-crystalvalue", numberOptions[1]);
    imageCrystal3.attr("data-crystalvalue", numberOptions[2]);
    imageCrystal4.attr("data-crystalvalue", numberOptions[3]);
}
function restart() {
    min = 19;
    max = 120;
    targetNumber = Math.floor(Math.random() * (+max - +min) + +min);
    $("#number-to-guess").text(targetNumber);
    counter = 0
}
// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal").on("click", function () {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    $("#total").text("New score: " + counter);

    if (counter === targetNumber) {
        wins++;
        $("#wins").text(wins)
        restart();
    }

    else if (counter >= targetNumber) {
        losses++;
        $("#losses").text(losses)
        restart();
    }

});
