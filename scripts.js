//making calling these divs easier
let infoScreenDiv = $("#info");
let actionScreenDiv = $("#actions");
//test playerOne info on the div
let playerOne = $("<span>Luke 3000 / 3000</span>");
playerOne.appendTo(infoScreenDiv);

let arrowPointer = $("<img src='images/si-glyph-arrow-thick-left.svg' id='arrow'>");


//loops all the action items on the div
let actionListItems = ["Fight", "Magic", "Code", "Items"];
for(i = 0; i < actionListItems.length; i++) {
    let actionItem = $("<span id=" + i + ">" + actionListItems[i] + "</span><br>")
    actionItem.appendTo(actionScreenDiv);
}

$(document).keypress(function (event) {

arrowPointer.appendTo("#0");

});

