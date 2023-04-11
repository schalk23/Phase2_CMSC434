window.firstname = "";
window.lastname = "";
window.level = ""; // beginner, intermediate, or advanced
window.calorieGoal = 0;
window.waterGoal = 0;

function createUser() {

    firstname = document.getElementById("fname").value;
    lastname = document.getElementById("lname").value;
    
    level = document.getElementsByName("FitnessLevel");
    for(i = 0; i< level.length; i++){
        if(level[i].checked) {
            level = level[i].value;
        }
    }
    waterGoal =  document.getElementById("water").value;
    calorieGoal =  document.getElementById("calories").value;
    alert("Saved!");

}
