localStorage.setItem('stretches', JSON.stringify([]));
// When the back image is clicked on, it goes to the appropriate stretches page
function clickBack() {
        if(document.getElementById("level").value === "Beginner") {
            location.href = 'beginnerBack.html';
        } else if (document.getElementById("level").value === "Intermediate") {
            location.href = 'intermediateBack.html';
        } else if (document.getElementById("level").value === "Advanced") {
            location.href = 'advancedBack.html';
        }
}

// When the arms image is clicked on, it goes to the appropriate stretches page
function clickArms() {
    if(document.getElementById("level").value === "Beginner") {
        location.href = 'beginnerArms.html';
    } else if (document.getElementById("level").value === "Intermediate") {
        location.href = 'intermediateArms.html';
    } else if (document.getElementById("level").value === "Advanced") {
        location.href = 'advancedArms.html';
    }
}

// When the abs image is clicked on, it goes to the appropriate stretches page
function clickAbs() {
    if(document.getElementById("level").value === "Beginner") {
        location.href = 'beginnerAbs.html';
        
    } else if (document.getElementById("level").value === "Intermediate") {
        location.href = 'intermediateAbs.html';
    } else if (document.getElementById("level").value === "Advanced") {
        location.href = 'advancedAbs.html';
    }
}

// When the legs image is clicked on, it goes to the appropriate stretches page
function clickLegs() {
    if(document.getElementById("level").value === "Beginner") {
        location.href = 'beginnerLegs.html';
    } else if (document.getElementById("level").value === "Intermediate") {
        location.href = 'intermediateLegs.html';
    } else if (document.getElementById("level").value === "Advanced") {
        location.href = 'advancedLegs.html';
    }
}
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
function submittedStretches(page) {
    document.getElementById("buttonS").innerHTML = "<h2 style=\"background-color:#fffae0ff; color:black;\"> Stretches Submitted! </h2>";
    document.getElementById("buttonS").style["background-color"] = "#fffae0ff";
    
    // user must be on the current page in order for this .checked to work
    //the passed in page so that we can uncheck all of the stretches they submitted
    if(page === "BA") {
        const s = JSON.parse(localStorage.getItem('stretches') || '[]');
        if(document.getElementById("BA1").checked) {
            s.push("BA1");
            console.log(s);
            localStorage.setItem('stretches', JSON.stringify(stretches));
        }
        if(document.getElementById("BA2").checked) {
            stretch.push("BA2");
            console.log(stretches);
            localStorage.setItem('stretches', JSON.stringify(stretches));
        }
        if(document.getElementById("BA3").checked) {
            stretch.push("BA3");
            console.log(stretches);
            localStorage.setItem('stretches', JSON.stringify(stretches));
        }
        document.getElementById("BA1").checked = false;
        document.getElementById("BA2").checked = false;
        document.getElementById("BA3").checked = false; 
    }
    
    if(page === "IA") {
        document.getElementById("IA1").checked = false;
        document.getElementById("IA2").checked = false;
        document.getElementById("IA3").checked = false;
    }

    if(page === "AA") {
        document.getElementById("AA1").checked = false;
        document.getElementById("AA2").checked = false;
        document.getElementById("AA3").checked = false;
    }

    if(page === "BB") {
        document.getElementById("BB1").checked = false;
        document.getElementById("BB2").checked = false;
        document.getElementById("BB3").checked = false;
    }

    if(page === "IB") {
        document.getElementById("IB1").checked = false;
        document.getElementById("IB2").checked = false;
        document.getElementById("IB3").checked = false;
    }

    if(page === "AB") {
        document.getElementById("AB1").checked = false;
        document.getElementById("AB2").checked = false;
        document.getElementById("AB3").checked = false;
    }

        if(page === "BAR") {
        document.getElementById("BAR1").checked = false;
        document.getElementById("BAR2").checked = false;
        document.getElementById("BAR3").checked = false;
    }

    if(page === "IAR") {
        document.getElementById("IAR1").checked = false;
        document.getElementById("IAR2").checked = false;
        document.getElementById("IAR3").checked = false;
    }

    if(page === "AAR") {
        document.getElementById("AAR1").checked = false;
        document.getElementById("AAR2").checked = false;
        document.getElementById("AAR3").checked = false;
    }

    if(page === "BL") {
        document.getElementById("BL1").checked = false;
        document.getElementById("BL2").checked = false;
        document.getElementById("BL3").checked = false;
    }

        if(page === "IL") {
        document.getElementById("IL1").checked = false;
        document.getElementById("IL2").checked = false;
        document.getElementById("IL3").checked = false;
    }

    if(page === "AL") {
        document.getElementById("AL1").checked = false;
        document.getElementById("AL2").checked = false;
        document.getElementById("AL3").checked = false;
    }
}
