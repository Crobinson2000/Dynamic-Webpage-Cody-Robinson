var ollie = $("#ollie");
var rail = $("#rail");
var barrier = $("#barrier");
var kickflip = $("#kickflip");
var grind = $("#grind");
var crash = $("#crash");
var riding = $("#riding");
var standing = $("#standing");
var score = 0;
var startScreen = $("#start-screen");
var grindSound = document.getElementById("grindSound");
var jump = document.getElementById("jump");
var interval;

ollie.hide();
kickflip.hide();
grind.hide();
crash.hide();
riding.hide();

function updateScore(points) {
    score += points;
    $(".score").text(score);

    // Check if the score reaches 1000 points
    if (score >= 500) {
        alert("Good job! You've reached 500 points. Refresh the page to continue.");
        location.reload();
        mclearInterval(interval);
    }
    }




$(document).on("keydown", function (e) {
    if (e.key === "x") {
        console.log(e.key)
      kickflip.show();
        standing.hide();
        riding.hide();
        jump.play();
        updateScore(10);

    } else if (e.key === "g") {
        console.log(e.key)
        grind.show();
        riding.hide();
        standing.hide();
        grindSound.play();
        updateScore(20);
    
    } else if (e.key === " ") {
        console.log(e.key)
        ollie.show();
        standing.hide();
        riding.hide();
        jump.play();
        updateScore(5);
    
    } else if (e.key === "ArrowRight") {
        console.log(e.key)
        riding.show();
        standing.hide();
        startScreen.hide();
        interval = setInterval(moveObstaclesContinuously(), 3000);
        // Interval
    
    }  else if (["z", "c", "v", "b", "n", "m"].includes(e.key)) {
        console.log(e.key);
        crash.show();
        riding.hide();
        updateScore(-10);
        

}
});


$(document).on("keyup", function (e) {
    if (e.key === "x") {
        console.log(e.key)
      kickflip.hide();
        riding.show();
    
    } else if (e.key === "g") {
        console.log(e.key)
        grind.hide();
        riding.show();
    
    } else if (e.key === " ") {
        console.log(e.key)
        ollie.hide();
        riding.show();
    
    }else if (["z", "c", "v", "b", "n", "m", "f", "s", "d", "h"].includes(e.key)) {
        console.log(e.key);
        crash.hide();
        riding.show();
    }
});


function moveObstaclesContinuously() {
    var obstacleType = Math.random() < 0.5 ? "#rail" : "#barrier";
    $("#rail, #barrier" + obstacleType).css("transform", "translateX(-100%)");

    //setInterval (moveObstaclesContinuously, 3000); // Change obstacles every 3 seconds
}

$(document).on("keydown", function(e) {
    if (e.key === "ArrowRight") {
        moveObstaclesContinuously();
    }
});
