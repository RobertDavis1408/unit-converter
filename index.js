
const metersToFeet = 3.281 
const litersToGallons = 0.264 
const kilogramToPounds = 2.204

const inputBoxEl = document.getElementById("input-box")
const convertBtn = document.querySelector("#convert-btn")
let lengthOutputEL = document.querySelector("#length-output")
const volumeOutputEl = document.querySelector("#volume-output")
const massOutputEl = document.querySelector("#mass-output")

convertBtn.addEventListener("click", function(){
    inputBoxEl.textContent = "0";
   inputEl= inputBoxEl.value;
   lengthOutputEL.textContent =`${inputEl} meters = ${(inputEl * metersToFeet).toFixed(3)} feet | 
   ${inputEl} feet = ${(inputEl / metersToFeet).toFixed(3)} meters`;
   volumeOutputEl.textContent  =`${inputEl} liters = ${(inputEl * litersToGallons).toFixed(3)} gallons | 
   ${inputEl} gallons = ${(inputEl / litersToGallons).toFixed(3)} liters`;
   massOutputEl.textContent =`${inputEl} kilos = ${(inputEl * litersToGallons).toFixed(3)} pounds | 
   ${inputEl} pounds = ${(inputEl / kilogramToPounds).toFixed(3)} kilos`    
    
    document.getElementById("input-box").value = "";
    document.getElementById("input-box").style.width = '2ch';
})











