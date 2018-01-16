//making calling these divs easier
let infoScreenDiv = $("#info");
let actionScreenDiv = $("#actions");
//test playerOne info on the div
let playerOne = $("<span>Luke 1187 / 3000</span>");
playerOne.appendTo(infoScreenDiv);

//loops all the action items on the div
let actionListItems = ["Fight", "Magic", "Code", "Items"];
for(i = 0; i < actionListItems.length; i++) {
    let actionItem = $("<span>" + actionListItems[i] + "</span><br>")
    actionItem.appendTo(actionScreenDiv);
}
