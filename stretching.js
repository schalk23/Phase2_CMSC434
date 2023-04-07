let stretchesArr = ["BAR1", "BAR2", "BA1", "BA2", "BA3", "BB1", "BB" ]// When the back image is clicked on, it goes to the appropriate stretches page

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

// Passing in an argument here, using the onchange property in the HTML allows us to track if the checkbox is checked
// function ifChecked(arg) {
//     if(document.getElementById("level").innerHTML === "Advanced") {
//        if(document.getElementById('AL1').checked) {
//         console.log("YES");
//         } 
//     }
    
//}
let SOTD1 = `./stretch_images/SOTD${Math.floor(Math.random() * 14) + 1}.jpg`;
let SOTD2 = `./stretch_images/SOTD${Math.floor(Math.random() * 14) + 1}.jpg`;
let SOTD3 = `./stretch_images/SOTD${Math.floor(Math.random() * 14) + 1}.jpg`;

// Controls the images for the dots
function currentSlide(dotNum) {
    //Generates a random stretch number for stretch of the day between 1 - 14
    if(dotNum === 1) {
        document.getElementById("SOTD").src = SOTD1;
    } else if (dotNum === 2) {
        document.getElementById("SOTD").src = SOTD2;
    } else if (dotNum === 3) {
       document.getElementById("SOTD").src = SOTD3;

    }
}

// When the user submits their stretches, they see the format of the button change
function submittedStretches() {
    document.getElementById("buttonS").innerHTML = "<h2 style=\"background-color:#fffae0ff; color:black;\"> Stretches Submitted! </h2>";
    document.getElementById("buttonS").style["background-color"] = "#fffae0ff";
    document.getElementById("BA1").checked = false;
    document.getElementById("BA2").checked = false;
    document.getElementById("BA3").checked = false;
    document.getElementById("IA1").checked = false;
    document.getElementById("IA2").checked = false;
    document.getElementById("IA3").checked = false;
    document.getElementById("AA1").checked = false;
    document.getElementById("AA2").checked = false;
    document.getElementById("AA3").checked = false;
    document.getElementById("BB1").checked = false;
    document.getElementById("BB2").checked = false;
    document.getElementById("BB3").checked = false;
    document.getElementById("IB1").checked = false;
    document.getElementById("IB2").checked = false;
    document.getElementById("IB3").checked = false;
    document.getElementById("AB1").checked = false;
    document.getElementById("AB2").checked = false;
    document.getElementById("AB3").checked = false;
    document.getElementById("BAR1").checked = false;
    document.getElementById("BAR2").checked = false;
    document.getElementById("BAR3").checked = false;
    document.getElementById("IAR1").checked = false;
    document.getElementById("IAR2").checked = false;
    document.getElementById("IAR3").checked = false;
    document.getElementById("AAR1").checked = false;
    document.getElementById("AAR2").checked = false;
    document.getElementById("AAR3").checked = false;
    document.getElementById("BL1").checked = false;
    document.getElementById("BL2").checked = false;
    document.getElementById("BL3").checked = false;
    document.getElementById("IL1").checked = false;
    document.getElementById("IL2").checked = false;
    document.getElementById("IL3").checked = false;
    document.getElementById("AL1").checked = false;
    document.getElementById("AL2").checked = false;
    document.getElementById("AL3").checked = false;

}
