// When the back image is clicked on, it goes to the appropriate stretches page
let SOTD = [];
let 

function clickBack() {
        if(document.getElementById("level").innerHTML === "Beginner") {
            location.href = 'beginnerBack.html';
        } else if (document.getElementById("level").innerHTML === "Intermediate") {
            location.href = 'intermediateBack.html';
        } else if (document.getElementById("level").innerHTML === "Advanced") {
            location.href = 'advancedBack.html';
        }
}

// When the arms image is clicked on, it goes to the appropriate stretches page
function clickArms() {
    if(document.getElementById("level").innerHTML === "Beginner") {
        location.href = 'beginnerArms.html';
    } else if (document.getElementById("level").innerHTML === "Intermediate") {
        location.href = 'intermediateArms.html';
    } else if (document.getElementById("level").innerHTML === "Advanced") {
        location.href = 'advancedArms.html';
    }
}

// When the abs image is clicked on, it goes to the appropriate stretches page
function clickAbs() {
    if(document.getElementById("level").innerHTML === "Beginner") {
        location.href = 'beginnerAbs.html';
    } else if (document.getElementById("level").innerHTML === "Intermediate") {
        location.href = 'intermediateAbs.html';
    } else if (document.getElementById("level").innerHTML === "Advanced") {
        location.href = 'advancedAbs.html';
    }
}

// When the legs image is clicked on, it goes to the appropriate stretches page
function clickLegs() {
    if(document.getElementById("level").innerHTML === "Beginner") {
        location.href = 'beginnerLegs.html';
    } else if (document.getElementById("level").innerHTML === "Intermediate") {
        location.href = 'intermediateLegs.html';
    } else if (document.getElementById("level").innerHTML === "Advanced") {
        location.href = 'advancedLegs.html';
    }
}