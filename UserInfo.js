var firstname = "";
var lastname = "";
var level = ""; // beginner, intermediate, or advanced
var calorieGoal = 0;
var waterGoal = 0;

function createUser() {
    alert("new user created:");
    firstname = document.getElementById("fname").value;
    lastname = document.getElementsById("lname").value;
    
    level = document.getElementsByName("FitnessLevel");
    for(i = 0; i< level.length; i++){
        if(level[i].checked) {
            level = level[i].value;
        }
    }
    waterGoal =  document.getElementById("water").value;
    calorieGoal =  document.getElementById("calories").value;
    alert("new user created:" + firstname + lastname+level+calorieGoal+waterGoal);

}
