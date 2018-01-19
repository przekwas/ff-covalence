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

//player class based on npc
class Player extends Npc {
    constructor(name, totalHealth, currentHealth, attackPower) {
        super(name, totalHealth, currentHealth, attackPower);
    }
    //attack animation for players
    attack() {
        $("#warrior")
            .html("<img src='images/Warrior-Attack.gif'>")
            .animate({ "left": "70%" }, 500, function () {
                $(this)
                    .html("<img src='images/Warrior.gif'>")
                    .animate({ "left": "75%" }, 500);
            });
        $("#ragnarok").delay(500).fadeIn(0).delay(150).fadeOut(0);
    }
    //victory animation for playerds
    victory() {
        $("#warrior img").attr("src", "images/Warrior-Victory.gif");
    }


}

//boss class based on npc
class Boss extends Npc {
    constructor(name, totalHealth, currentHealth, attackPower) {
        super(name, totalHealth, currentHealth, attackPower);
    }

    damage() {
        $("#boss")
            .delay(600)
            .queue(function (next) {
                $(this).css({ "filter": "invert()" });
                next();
            })
            .delay(100)
            .queue(function (next) {
                $(this).css({ "filter": "none" });
                next();
            });
    }
}

//test objects for players and npcs
let playerOne = new Player("Luke", 3000, 1987, 200);
let boss = new Boss("Covalence", 9999, 399, 100);


//test playerOne info on the div
let positionOne = $("<div>" + playerOne.name + ": " + playerOne.currentHealth + " / " + playerOne.totalHealth + "</div><br>");
positionOne.appendTo(infoScreenDiv);

let positionTwo = $("<div id='boss-stats'>" + boss.name + ": " + boss.currentHealth + " / " + boss.totalHealth + "</div><br>");
positionTwo.appendTo(infoScreenDiv);

// let arrowPointer = $("<img src='images/si-glyph-arrow-thick-left.svg' id='arrow'>");
let arrowPointer = $("<img src='images/cursor.png' id='arrow'>");


//loops all the action items on the div
let actionListItems = ["Fight", "Magic", "Code", "Items"];
for (i = 0; i < actionListItems.length; i++) {
    let actionItem = $("<div id=" + i + ">" + actionListItems[i] + "</div>")
    actionItem.appendTo(actionScreenDiv);
}

//appends arrow pointer to default position "fight" on screen
arrowPointer.appendTo("#0");
let actionIndex = 0;

$(document).ready(function () {
    $("#ragnarok").hide();
});

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
                playerOne.attack();
                boss.damage();
                //death fade, victory dance!
            } else if (boss.currentHealth - playerOne.attackPower <= 0) {
                playerOne.attack();
                boss.damage();
                $("#boss-stats").text(boss.name + ": SLAUGHTERED!");
                $("#boss").delay(100).fadeOut(2000);
                $("#warrior").delay(500).queue(function () {

                    playerOne.victory();

                    $(this).dequeue();

                });
            }
            //catch for "Magic" being selected
        } else if (actionIndex === 1) {

            playerOne.magicCast();
            //catch for "Code" being selected
        } else if (actionIndex === 2) {

            //catch for "Item" being selected
        } else if (actionIndex === 3) {

        }
    }

});
