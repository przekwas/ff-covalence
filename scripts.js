let playerOne = $("<span>Luke 1187 / 3000</span>");
let infoScreenDiv = $("#info");
let actionScreenDiv = $("#actions");

playerOne.appendTo(infoScreenDiv);

let actionListItems = ["Fight", "Magic", "Code", "Items"];

for(i = 0; i < actionListItems.length; i++) {
    let actionItem = $("<span>" + actionListItems[i] + "</span><br>")
    actionItem.appendTo(actionScreenDiv);
}
