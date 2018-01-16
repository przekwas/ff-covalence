//making calling these divs easier
let infoScreenDiv = $("#info");
let actionScreenDiv = $("#actions");
//test playerOne info on the div
let playerOne = $("<span>Luke 3000 / 3000</span>");
playerOne.appendTo(infoScreenDiv);

let arrowPointer = $("<img src='images/si-glyph-arrow-thick-left.svg' id='arrow'>");


//loops all the action items on the div
let actionListItems = ["Fight", "Magic", "Code", "Items"];
for (i = 0; i < actionListItems.length; i++) {
    let actionItem = $("<span id=" + i + ">" + actionListItems[i] + "</span><br>")
    actionItem.appendTo(actionScreenDiv);
}

//appends arrow pointer to default position "fight" on screen
arrowPointer.appendTo("#0");
let actionIndex = 0;

$(document).keydown(function (event) {

    //watches for up/down arrow keys to move the arrow
    if (event.which === 40) {
        actionIndex++;
        arrowPointer.appendTo("#" + actionIndex);
        if (actionIndex > 3) {
            actionIndex = 0;
            arrowPointer.appendTo("#" + actionIndex);
        }
    } else if (event.which === 38) {
        actionIndex--;
        arrowPointer.appendTo("#" + actionIndex);
        if (actionIndex < 0) {
            actionIndex = 3;
            arrowPointer.appendTo("#" + actionIndex);
        }

    }


});
