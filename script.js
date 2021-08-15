let billAmt = document.querySelector('#billAmt');
let cashGiven = document.querySelector('#cashGvn');
let cashContainer = document.querySelector('.cash_container');
let returnContainer = document.querySelector('.return_container');
let msg = document.querySelector('.message');
let nextBtn = document.querySelector('.nextBtn');
let leftAmt = "";
const notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
let numOfNotes = document.querySelectorAll('.numOfNotes');

//to display message
function displayMessage(text) {
    msg.innerText = text;
    msg.style.display = "block";
}

//function to calculate notes and render it over the screen
function calculateNotes(amt, noteDenomination, index) {
    if (amt >= noteDenomination) {
        let num = Math.floor(amt / noteDenomination);
        amt = amt - (num * noteDenomination);
        numOfNotes[index].innerText = num;
    }
    return amt;
}

//refresh the table record 
function refreshRecord() {
    for (let notes of numOfNotes) {
        notes.innerText = "";
    }
}

//to hide the message
function hideMsg() {
    msg.style.display = "none";
}

//things to happen on click of next button
document.querySelector('.nextBtn').addEventListener("click", () => {
    let billAmnt = Number(billAmt.value);
    if (billAmnt === "" || billAmnt <= 0 || !(Number.isInteger(billAmnt))) {
        displayMessage("Enter a valid Bill amount");
    } else {
        nextBtn.style.display = "none";
        hideMsg();
        cashContainer.style.display = "block";
    }
});

//things to happen on click on check button
document.querySelector('.chckBtn').addEventListener("click", () => {
    refreshRecord();
    hideMsg();
    returnContainer.style.display = "none";
    let billAmount = Number(billAmt.value);
    let cashAmount = Number(cashGiven.value);
    if (cashAmount === "" || cashAmount <= 0) {
        displayMessage("Enter a valid cash given amount");
    } else if (billAmount === "" || billAmount <= 0) {
        displayMessage("Bill amount should be greater than 0");
    } else if (billAmount === cashAmount) {
        displayMessage("No amount should be returned");
    } else if (cashAmount < billAmount) {
        displayMessage("Cash given is less than bill amount");
    } else if (!(Number.isInteger(billAmount))) {
        displayMessage("Please enter a valid Bill Amount");
    } else if (!(Number.isInteger(cashAmount))) {
        displayMessage("Please enter a valid Cash Amount");
    } else {
        returnContainer.style.display = "block";
        leftAmt = (cashAmount - billAmount);
        for (let i = 0; i < notes.length; i++) {
            leftAmt = calculateNotes(leftAmt, notes[i], i);
        }

    }
});
