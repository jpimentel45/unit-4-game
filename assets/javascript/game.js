$(document).ready(function () {
    //Set up variables
    var wins = 0;
    var losses = 0;
    var newtotalScore = 0;
    $(".wins").text("Wins: " + wins);
    $(".losses").text("Losses: " + losses);
    var newgeneratedNum = Math.floor((Math.random() * 101) + 19);
    $(".generatedNum").text(newgeneratedNum);
    //console.log(generatedNum);
    var crystalNum1 = Math.floor((Math.random() * 12) + 1);
    var crystalNum2 = Math.floor((Math.random() * 12) + 1);
    var crystalNum3 = Math.floor((Math.random() * 12) + 1);
    var crystalNum4 = Math.floor((Math.random() * 12) + 1);

    function initializeGame() {
        newgeneratedNum = Math.floor((Math.random() * 101) + 19);
        $(".generatedNum").text(newgeneratedNum);
        crystalNum1 = Math.floor((Math.random() * 12) + 1);
        crystalNum2 = Math.floor((Math.random() * 12) + 1);
        crystalNum3 = Math.floor((Math.random() * 12) + 1);
        crystalNum4 = Math.floor((Math.random() * 12) + 1);
        newtotalScore = 0;
        $(".totalScore").text(newtotalScore);
    }
    // wins { totalScore === newgeneratedNum}
    function win() {
        wins++;
        $(".wins").text("Wins: " + wins);
        initializeGame();
    }
    // losses {totalScore > newgeneratedNum}
    function loss() {
        losses++;
        $(".losses").text("Losses: " + losses);
        initializeGame();
    }
    //on click function for crystals
    $(".crystal1").click(function () {
        newtotalScore = newtotalScore + crystalNum1;
        console.log(" New totalScore= " + newtotalScore);
        $(".totalScore").text(newtotalScore);

        if (newtotalScore === newgeneratedNum) {
            win();
        } else if (newtotalScore > newgeneratedNum) {
            loss();
        }
    });
    $(".crystal2").click(function () {
        newtotalScore = newtotalScore + crystalNum2;
        console.log(" New totalScore= " + newtotalScore);
        $(".totalScore").text(newtotalScore);

        if (newtotalScore === newgeneratedNum) {
            win();
        } else if (newtotalScore > newgeneratedNum) {
            loss();
        }
    });
    $(".crystal3").click(function () {
        newtotalScore = newtotalScore + crystalNum3;
        console.log(" New totalScore= " + newtotalScore);
        $(".totalScore").text(newtotalScore);

        if (newtotalScore === newgeneratedNum) {
            win();
        } else if (newtotalScore > newgeneratedNum) {
            loss();
        }
    });
    $(".crystal4").click(function () {
        newtotalScore = newtotalScore + crystalNum4;
        console.log(" New totalScore= " + newtotalScore);
        $(".totalScore").text(newtotalScore);

        if (newtotalScore === newgeneratedNum) {
            win();
        } else if (newtotalScore > newgeneratedNum) {
            loss();
        }
    });
});
