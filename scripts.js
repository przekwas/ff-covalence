//making calling these divs easier
let infoScreenDiv = $("#info");
let actionScreenDiv = $("#actions");

//class for npc's
class Npc {
    constructor(name, totalHealth, currentHealth, attackPower) {
        this.name = name;
        this.totalHealth = totalHealth;
        this.currentHealth = currentHealth;
        this.attackPower = attackPower;
    }
}

//test objects for players and npcs
let playerOne = new Npc("Luke", 3000, 1987, 200);
let boss = new Npc("Covalence", 9999, 999, 100);


//test playerOne info on the div
let positionOne = $("<span>" + playerOne.name + ": " + playerOne.currentHealth + " / " + playerOne.totalHealth + "</span><br>");
positionOne.appendTo(infoScreenDiv);

let positionTwo = $("<span id='boss-stats'>" + boss.name + ": " + boss.currentHealth + " / " + boss.totalHealth + "</span><br>");
positionTwo.appendTo(infoScreenDiv);

let arrowPointer = $("<img src='images/si-glyph-arrow-thick-left.svg' id='arrow'>");


//loops all the action items on the div
let actionListItems = ["Fight", "Magic", "Code", "Items"];
for (i = 0; i < actionListItems.length; i++) {
    let actionItem = $("<span id=" + i + ">" + actionListItems[i] + "</span>")
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

    //watches for enter being pressed
    if (event.which == 13) {
        //catch for "Fight" being selected
        if (actionIndex === 0) {
            //prints new health for boss after being attacked
            if (boss.currentHealth - playerOne.attackPower > 0) {
                boss.currentHealth = boss.currentHealth - playerOne.attackPower;
                $("#boss-stats").text(boss.name + ": " + boss.currentHealth + " / " + boss.totalHealth);
                $("#warrior img").animate({ "right": "50px" }, function () {
                    $(this).animate({ "right": "0px" })
                });
            //death fade, victory dance!
            } else if (boss.currentHealth - playerOne.attackPower <= 0) {
                $("#boss-stats").text(boss.name + ": SLAUGHTERED!");
                $("#boss").fadeOut("slow");
                $("#warrior img").attr("src", "images/Warrior-Victory.gif");
            }
        }
    }

});
