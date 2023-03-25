window.onload = main;

//global objects
// let DayOfWeekArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
function main() {
    let DayOfWeek = 'Monday';
    let quotesOfDay = ['When we do the best we can, we never know what miracle is wrought in our life or the life of another. – Helen Keller',
    'When it is obvious that goals can’t be reached, don’t adjust the goals, but adjust the action steps. – Confucius',
    'The whole secret of a successful life is to find out what is one’s destiny to do, and then do it. – Henry Ford',
    'The willing, Destiny guides them. The unwilling, Destiny drags them. – Seneca',
    'Experience is a wonderful thing. It enables you to recognize a mistake when you make it again. – Franklin Jones',
    'Never let the fear of striking out keep you from playing the game.” – Babe Ruth',
    'The way I see it, if you want the rainbow, you gotta put up with the rain.” – Dolly Parton',
    'When we strive to become better than we are, everything around us becomes better too.” – Paulo Coelho',
    '“Worry never climbed a hill. Worry never paid a bill. Worry never dried a tear. Worry never calmed a fear." – Eleanor H Porter',
    '“If you want to live a happy life, tie it to a goal, not to people or things.” – Albert Einstein',
    '“Being cool is when you win, you don’t get too happy; and when you lose, you don’t get too mad.” – Ice T',
    'Never give up. When your heart becomes tired, just walk with your legs – but move on.” – Paulo Coelho',
    'Everything negative – pressure, challenges – is all an opportunity for me to rise.” – Kobe Bryant'];
    num = 0;

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
        // Adjust the quotes of the day each day
        if (num != quotesOfDay.length - 1) {
            document.getElementById("quote").innerHTML = quotesOfDay[num];
            num++;
        } else {
            num = 0;
        }
    }, 10000);
}