window.onload = main;

//global objects
// let DayOfWeekArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
function main() {
    let DayOfWeek = 'Monday';
    // Set interval for the day of the week changing every 20 seconds
   setInterval(function () {
    /* We want to set the correct active fire image to the day of the week that it currently is */
    switch(DayOfWeek) {
        case 'Monday':
            document.getElementById("MonStreak").innerHTML = "<img id=\"streak\" src=\"./stretch_images/passionateActive.png\" height=95px width=\"auto\">";
            // A full streak will be reset after the week is done
            document.getElementById("TueStreak").innerHTML = "<img id=\"streak\" src=\"./stretch_images/passionate.png\" height=95px width=\"auto\">";
            document.getElementById("WedStreak").innerHTML = "<img id=\"streak\" src=\"./stretch_images/passionate.png\" height=95px width=\"auto\">";
            document.getElementById("ThrStreak").innerHTML = "<img id=\"streak\" src=\"./stretch_images/passionate.png\" height=95px width=\"auto\">";
            document.getElementById("FriStreak").innerHTML = "<img id=\"streak\" src=\"./stretch_images/passionate.png\" height=95px width=\"auto\">";
            document.getElementById("SatStreak").innerHTML = "<img id=\"streak\" src=\"./stretch_images/passionate.png\" height=95px width=\"auto\">";
            document.getElementById("SunStreak").innerHTML = "<img id=\"streak\" src=\"./stretch_images/passionate.png\" height=95px width=\"auto\">";
            // This will make sure that we change to the next day so the set interval function can run every 'day' aka 10seconds
            DayOfWeek = 'Tuesday';
            break;
        case 'Tuesday':
            document.getElementById("TueStreak").innerHTML = "<img id=\"streak\" src=\"./stretch_images/passionateActive.png\" height=95px width=\"auto\">";
            DayOfWeek = 'Wednesday';
            break;
        case 'Wednesday':
            document.getElementById("WedStreak").innerHTML = "<img id=\"streak\" src=\"./stretch_images/passionateActive.png\" height=95px width=\"auto\">";
            DayOfWeek = 'Thursday';
            break;
        case 'Thursday':
            document.getElementById("ThrStreak").innerHTML = "<img id=\"streak\" src=\"./stretch_images/passionateActive.png\" height=95px width=\"auto\">";
            DayOfWeek = 'Friday';
            break;
        case 'Friday':
            document.getElementById("FriStreak").innerHTML = "<img id=\"streak\" src=\"./stretch_images/passionateActive.png\" height=95px width=\"auto\">";
            DayOfWeek = 'Saturday';
            break;
        case 'Saturday':
            document.getElementById("SatStreak").innerHTML = "<img id=\"streak\" src=\"./stretch_images/passionateActive.png\" height=95px width=\"auto\">";
            DayOfWeek = 'Sunday';
            break;
        case 'Sunday':
            document.getElementById("SunStreak").innerHTML = "<img id=\"streak\" src=\"./stretch_images/passionateActive.png\" height=95px width=\"auto\">";
            // Make sure you change the previous image back to the normal one            
            DayOfWeek = 'Monday';
            break;
    }
   }, 10000);
}