// When the back image is clicked on, it goes to the appropriate stretches page
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
