/* input.value ska visas på 6 olika ställen.
när convert klickas ska alla funktioner kallas
olika funktioner för alla olika konverters
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
runda upp svaren till 3 decimaler. 
svaren ska ha class remove innan knappen klickas. 
class tas bort när convert klickas och då visas svaren.
*/ 

let convertBtn = document.getElementById("convert-btn");
let lenghtP = document.getElementById("lenght-p");
let volumeP = document.getElementById("volume-p");
let massP = document.getElementById("mass-p");


convertBtn.addEventListener("click", function() {
    let inputValue = document.getElementById("input-value").value
    console.log(inputValue)
    lenght(inputValue)
    volume(inputValue);
    mass(inputValue)
});

function lenght(inputValue) {
    let meters =   inputValue + " meters = " + (inputValue * 3.281).toFixed(3) +  " feet | " + inputValue +  " feet = " + (inputValue / 3.281).toFixed(3) + "meters";
    lenghtP.innerHTML = meters;
}

function volume(inputValue) {
    let liters =   inputValue + " liters = " + (inputValue * 0.264).toFixed(3) +  " gallons | " + inputValue +  " gallons = " + (inputValue / 0.264).toFixed(3) + " liters";
    volumeP.innerHTML = liters;
}

function mass(inputValue) {
    let kilograms =   inputValue + " kilograms = " + (inputValue * 2.204).toFixed(3) +  " pounds | " + inputValue +  " pounds = " + (inputValue / 2.204).toFixed(3) + " kilograms";
    massP.innerHTML = kilograms;
}