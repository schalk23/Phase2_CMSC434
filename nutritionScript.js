var totalCal = 0;
var totalFat = 0;
var totalCarb = 0;
var totalProtein = 0;
var totalWaterInTake = 0;
var eat = false;


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



   