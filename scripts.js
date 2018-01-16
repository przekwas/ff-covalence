//making calling these divs easier
let infoScreenDiv = $("#info");
let actionScreenDiv = $("#actions");

//objects for players and npcs
let playerOne = {
    name: "Luke",
    totalHealth: "3000",
    currentHealth: "1987",
    attackPower: "200"
}
let boss = {
    name: "Covalence",
    totalHealth: "9999",
    currentHealth: "999",
    attackPower: "100"
}

//test playerOne info on the div
let positionOne = $("<span>" + playerOne.name + ": " + playerOne.currentHealth + " / " + playerOne.totalHealth + "</span><br>");
positionOne.appendTo(infoScreenDiv);

let positionTwo = $("<span id='boss-stats'>" + boss.name + ": " + boss.currentHealth + " / " + boss.totalHealth + "</span><br>");
positionTwo.appendTo(infoScreenDiv);

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

$(document).keypress(function () {

    if (event.which == 13) {
        if (actionIndex === 0) {
            if (boss.currentHealth - playerOne.attackPower > 0) {
                boss.currentHealth = boss.currentHealth - playerOne.attackPower;
                $("#boss-stats").text(boss.name + ": " + boss.currentHealth + " / " + boss.totalHealth);
            } else if (boss.currentHealth - playerOne.attackPower <= 0) {
                $("#boss-stats").text(boss.name + ": SLAUGHTERED!");
                $("#boss").fadeOut("slow");
                $("#warrior img").attr("src", "images/Warrior-Victory.gif");
            }
        }
    }

});
