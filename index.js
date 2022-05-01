// document.getElementById("count").innerText = 0

let countEl = document.getElementById("count");
let saveEL = document.getElementById("save-el")
let count = 0;
function increment(){
    count += 1;
    countEl.textContent = count;
}
function save(){
    saveEL.textContent += count;
    saveEL.textContent += " - ";
    countEl.textContent = 0;
    count = 0;
}