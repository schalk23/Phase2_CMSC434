// keeps track of a user's mode each day after check in
moodData = []; 

// keeps track of the intensity of the mood in same index in the  MoodData array.
// For example, Mooddata[1] corresponds to intensityData[1]
intensityData = [];

moodData.push("happy", "happy", "sad", "anxious", "nervous"); // we have here 5 days worth of data 
intensityData.push(8,8,5,8,9); // these 5 intensities correspond with the 5 moods in moodData

function moodCheckIn() {
    // reading the mood and intensity 
    mood = document.getElementById('mood').innerText; 
    intensity = parseInt(document.getElementById('intensity').innerText);  
    
    // save the data 
    intensityData.push(intensity);
    moodData.push(mood);   
    if (mood == '') {
        alert("complete your mood check in before submitting! ")
    } else {
        alert("Thanks for checking in! See you tommorow!");
    }
    
    document.getElementById('mood').innerHTML="";
    document.getElementById("intensity").innerHTML ="";  

}
