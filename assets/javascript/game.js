$(document).ready(function () {
    //Set up variables
    var generatedNum = "";
    var wins = 0;
    var losses = 0;
    var crystal1 = "";
    var crystal2 = "";
    var crystal3 = "";
    var crystal4 = "";
    var totalScore = 0;

    //4 crystals displayed as buttons, one box containning random num
    //create random generator for: generatedNum:(19-120), and crystal buttons(1-12)
    // crystal random: var .click = Math.floor((Math.random() * 12) + 1);
    // generatedNum: var .click = Math.floor((Math.random() * 120) + 19);
    var crystalNum1 = Math.floor((Math.random() * 12) + 1);
    var crystalNum2 = Math.floor((Math.random() * 12) + 1);
    var crystalNum3 = Math.floor((Math.random() * 12) + 1);
    var crystalNum4 = Math.floor((Math.random() * 12) + 1);
    var generatedNum = Math.floor((Math.random() * 120) + 19);

    console.log(generatedNum);
    //random num shown at start of game (function(initializeGame Might have taken care of this arleady))
    $(".generatedNum").text(generatedNum);
    $(".wins").text("Wins: " + wins);
    $(".losses").text("Losses: " + losses);

    function initializeGame() {

        var crystalNum1 = Math.floor((Math.random() * 12) + 1);
        var crystalNum2 = Math.floor((Math.random() * 12) + 1);
        var crystalNum3 = Math.floor((Math.random() * 12) + 1);
        var crystalNum4 = Math.floor((Math.random() * 12) + 1);
        var generatedNum = Math.floor((Math.random() * 120) + 19);
        $(".generatedNum").text(generatedNum);
        var wins = 0;
        var losses = 0;
        var totalScore = 0;
        $(".totalScore").text(totalScore);
        $("#wins, #losses, #totalScore").empty();
        //document.getElementsByClassName(".generatedNum").innerHTML = generatedNum;

    }

    // wins { totalScore === generatedNum}
    function win() {
        wins++;
        $(".wins").text("Wins: " + wins);
        initializeGame();
    }
    // losses {totalScore > generatedNum}
    function loss() {
        losses++;
        $(".losses").text("Losses: " + losses);
        initializeGame();
    }

    // add $().on("click", Function()) for when player clicks on crystal
    //Value will be hidden; player will know value when click and add value to total score
    $(".crystal1").click(function () {
        totalScore = totalScore + crystalNum1;
        console.log(" New totalScore= " + totalScore);
        $(".totalScore").text(totalScore);
        if (totalScore === generatedNum) {
            win();
        } else if (totalScore > generatedNum) {
            loss();
        }
    });
    $(".crystal2").click(function () {
        totalScore = totalScore + crystalNum2;
        console.log(" New totalScore= " + totalScore);
        $(".totalScore").text(totalScore);
        if (totalScore === generatedNum) {
            win();
        } else if (totalScore > generatedNum) {
            loss();
        }
    });
    $(".crystal3").click(function () {
        totalScore = totalScore + crystalNum3;
        console.log(" New totalScore= " + totalScore);
        $(".totalScore").text(totalScore);
        if (totalScore === generatedNum) {
            win();
        } else if (totalScore > generatedNum) {
            loss();
        }
    });
    $(".crystal4").click(function () {
        totalScore = totalScore + crystalNum4;
        console.log(" New totalScore= " + totalScore);
        $(".totalScore").text(totalScore);
        if (totalScore === generatedNum) {
            win();
        } else if (totalScore > generatedNum) {
            loss();
        }
    });
    //Add crystals random value added to players total score



    //restatrt game when player wins/loses
    //new game = new generatedNum, 4 new hidden crystal values, users score, score counter reset to zero


});