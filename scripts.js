const billTotal = document.querySelector("#fbill");
const tipSlider = document.querySelector("#ftip");
const tipPercentage = document.querySelector("#fpercentage");
const tipAmount = document.querySelector("#famount");
const totalWtip = document.querySelector("#ftotal");
const err = document.getElementById("errormsg")

//Hear the event -> read the value out of the Bill total field
billTotal.addEventListener("input", updateForm);
//also tip input slider
tipSlider.addEventListener("input", updateForm);

function updateForm(){
    const letters = /[a-zA-Z]/;
    if (letters.test(billTotal.value) == true) {
        err.innerHTML = "Invalid";
        err.style.color = "#ff0000";
        err.style.fontSize = "50%";
    } else {
        document.getElementById("errormsg").innerHTML = "";
        //read the value of the bill total field
        //parseFloat was included because without it  output would be 10050 instead of 150
        const totalBill = parseFloat(billTotal.value); 
        //write the values of the tip slider into the tip percentage field
        const percentage = tipSlider.value;
        tipPercentage.value = percentage + "%";
        //tip amount calculated
        const tipCalculated = (totalBill * (percentage/ 100));
        tipAmount.value = tipCalculated.toFixed(2); //toFixed() method for 2 decimal places
        //total with tip amount calculated
        const totalCalculated = totalBill + tipCalculated;
        totalWtip.value = totalCalculated.toFixed(2); //toFixed() method for 2 decimal places
    }

}
