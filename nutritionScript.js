
var totalCal = 0;
var totalFat = 0;
var totalCarb = 0;
var totalProtein = 0;
var totalWaterInTake = 0;
var eat = false;

var nutritionData = [
    ["Day 1",2051,24,225,55,3.7],
    ["Day 2",2122,20,250,49,3.7],
    ["Day 3",1953,28,205,52,3.7],
    ["Day 4",1907,32,200,42,3.7],
    ["Day 5",2327,35,260,36,3.7],
    ["Day 6",1649,31,120,20,3.7],
    ["Day 7",1859,22,150,31,3.7]
];
var days = [1,2,3,4,5,6,7]
var caloriesData = [2051,2122,1953,1907,2327,1649,1859,];

    function linegraph(){
        new Chart("myChart", {
            animcationEnabled: true,
            theme: "light2",
            title:{
                text: "Calories over 7 days"
            },
            type: "line",
            data: {
                labels: days,
                datasets: [{
                    fill: false,
                    lineTension: 0,
                    backgroundColor: "rgba(0,0,255,1.0)",
                    borderColor: "rgba(0,0,255,0.1)",
                    data: caloriesData
                }]

            },
            options: {
                legend: {display: false},
                scales: {
                    yAxes: [{ticks: {min: 6, max:16}}],
                }
            }

        });
    }

    function reset(){
        eat = false;
        document.getElementById("bfcalories").value = '';
        document.getElementById("bffat").value = '';
        document.getElementById("bfcarb").value = '';
        document.getElementById("bfprotein").value = '';
        document.getElementById("bfwaterintake").value = '';
    }
    function ifbreakfast(){
        eat = true;
        document.getElementById("bf").innerHTML = 'Breakfast';
    }
    function iflunch(){
        eat = true;
        document.getElementById("bf").innerHTML = 'Lunch';
    }
    function ifdinner(){
        eat = true;
        document.getElementById("bf").innerHTML = 'Dinner';
    }
    function openForm() {
        document.getElementById("form").style.display = "block";
    }
      
      function closeForm() {
        document.getElementById("form").style.display = "none";
    }

    function addtoTotal(){
       

        var bfcal = document.getElementById("bfcalories");
        var bffat = document.getElementById("bffat");
        var bfcarb = document.getElementById("bfcarb");
        var bfprotein = document.getElementById("bfprotein");
        var bfwater = document.getElementById("bfwaterintake");

        var callabel = document.getElementById("caloriesnum");
        var fatlabel = document.getElementById("fatnum");
        var carblabel = document.getElementById("carbnum");
        var proteinlabel = document.getElementById("proteinnum");
        var waterlabel = document.getElementById("waternum");
        var watermeter = document.getElementById("watermeter");
        var goal = 100;

        var toIntcal = parseInt(bfcal.value);
        var toIntfat = parseInt(bffat.value);
        var toIntcarb = parseInt(bfcarb.value);
        var toIntprotein = parseInt(bfprotein.value);
        var toIntwater = parseInt(bfwater.value);

        console.log(isNaN(toIntcal));

        if(eat){
            if(isNaN(toIntcal) == false && isNaN(toIntfat) == false && isNaN(toIntcarb) == false && isNaN(toIntprotein) == false && isNaN(toIntwater) == false){
                console.log("if");
                totalCal = parseInt(callabel.innerHTML) + parseInt(bfcal.value);
                callabel.innerHTML = totalCal;

                totalFat = parseInt(fatlabel.innerHTML) + parseInt(bffat.value);
                fatlabel.innerHTML = totalFat;

                totalCarb = parseInt(carblabel.innerHTML) + parseInt(bfcarb.value);
                carblabel.innerHTML = totalCarb;

                totalProtein = parseInt(proteinlabel.innerHTML) + parseInt(bfprotein.value);
                proteinlabel.innerHTML = totalProtein;

                totalWaterInTake = parseInt(waterlabel.innerHTML) + parseInt(bfwater.value);
                waterlabel.innerHTML = totalWaterInTake;
                watermeter.value = totalWaterInTake;
            }
            else{
                console.log("else");
                if(isNaN(toIntcal)){
                    totalCal = parseInt(callabel.innerHTML);
                    callabel.innerHTML = totalCal;
                }
                if(isNaN(toIntfat)){
                    totalFat = parseInt(fatlabel.innerHTML);
                    fatlabel.innerHTML = totalFat;
                }
                if(isNaN(toIntcarb)){
                    totalCarb = parseInt(carblabel.innerHTML);
                    carblabel.innerHTML = totalCarb;
                }
                if(isNaN(toIntprotein)){
                    totalProtein = parseInt(proteinlabel.innerHTML);
                    proteinlabel.innerHTML = totalProtein;
                }
                if(isNaN(toIntwater)){
                    totalWaterInTake = parseInt(waterlabel.innerHTML);
                    waterlabel.innerHTML = totalWaterInTake;
                }
                
            }
            
        }


    }



   