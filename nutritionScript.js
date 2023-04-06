
    let breakfastbool = false;
    let lunchbool = false;
    let dinnerbool = false;

    function clicktrue(){
        breakfastbool = true;
        lunchbool = true;
        dinnerbool = true;
    }

    function openForm(){
        document.getElementById("form").style.display = "block";

    }
    function writeData(){
        const fs = require('fs');
        console.log(breakfastbool);
        let calories = document.getElementById("caloryintake").value;
        let sat = document.getElementById("satfatintake").value;
        let trans = document.getElementById("transfatintake").value;
        let chonum = document.getElementById("cholesterolinput").value;
        let sodnum = document.getElementById("sodiuminput").value;
        let carbnum = document.getElementById("carbinput").value;
        let fibernum = document.getElementById("fiberinput").value;
        let tsugarnum = document.getElementById("totalsugarinput").value;
        let asugarnum = document.getElementById("addedsugarinput").value;
        let proteinnum = document.getElementById("proteininput").value;
        let data = "";
        if(breakfastbool){
            document.getElementById("totalfatnum").value = "deeznutz"
            data = "breakfast: calories: "+calories+"saturated fat: "+sat;
            fs.writeFile('nutritiondata.txt',data,(err)=> {
                if(err) throw err;
            })
            
        }
        
    }
    function reset(){
        document.getElementById("caloryintake").value = '';
        document.getElementById("satfatintake").value = '';
        document.getElementById("transfatintake").value = '';
        document.getElementById("cholesterolinput").value = '';
        document.getElementById("sodiuminput").value = '';
        document.getElementById("carbinput").value = '';
        document.getElementById("fiberinput").value = '';
        document.getElementById("totalsugarinput").value = '';
        document.getElementById("addedsugarinput").value = '';
        document.getElementById("proteininput").value = '';
        breakfastbool = false;
        lunchbool = false;
        dinnerbool = false;
        
    }
    function closeForm(){
        //reset all other values
        //need to write to textfile
        
        document.getElementById("form").style.display = "none";
        
    }
    function digitLimit(){
        let sat = document.getElementById("satfatintake");
        let trans = document.getElementById("transfatintake");
        let chonum = document.getElementById("cholesterolinput");
        let sodnum = document.getElementById("sodiuminput");
        let carbnum = document.getElementById("carbinput");
        let fibernum = document.getElementById("fiberinput");
        let tsugarnum = document.getElementById("totalsugarinput");
        let asugarnum = document.getElementById("addedsugarinput");
        let proteinnum = document.getElementById("proteininput");

        document.getElementById("totalfatnum").innerHTML = "test";

        if (sat.value.length > sat.maxLength){
            sat.value = sat.value.slice(0, sat.maxLength);
        }
        if (trans.value.length > trans.maxLength){
            trans.value = trans.value.slice(0, trans.maxLength);
        }
        if (chonum.value.length > chonum.maxLength){
            chonum.value = chonum.value.slice(0, chonum.maxLength);
        }
        if (sodnum.value.length > sodnum.maxLength){
            sodnum.value = sodnum.value.slice(0, sodnum.maxLength);
        }
        if (carbnum.value.length > carbnum.maxLength){
            carbnum.value = carbnum.value.slice(0, carbnum.maxLength);
        }
        if (fibernum.value.length > fibernum.maxLength){
            fibernum.value = fibernum.value.slice(0, fibernum.maxLength);
        }
        if (tsugarnum.value.length > tsugarnum.maxLength){
            tsugarnum.value = tsugarnum.value.slice(0, tsugarnum.maxLength);
        }
        if (asugarnum.value.length > asugarnum.maxLength){
            asugarnum.value = asugarnum.value.slice(0, asugarnum.maxLength);
        }
        if (proteinnum.value.length > proteinnum.maxLength){
            proteinnum.value = proteinnum.value.slice(0, proteinnum.maxLength);
        }
        
        // let totalfat = sat.value + trans.value;
        // fatnum.innerHTML = totalfat;
    }
    //need to limit the digits
    //need a function to limit the digit as well as update the labels
    
