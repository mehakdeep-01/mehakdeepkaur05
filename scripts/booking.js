/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let dailyRate = 0;
let dayCounter = 0;
let elements = document.querySelector('#calculated-cost');
let totalCost=0;



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
let dayButtons = document.querySelectorAll('.blue-hover');

dayButtons.forEach(function(button) {
    button.addEventListener('click', function () {
        if (!button.classList.contains('clicked')) {
            button.classList.add('clicked');
            dayCounter++;
            recalculateTotalCost();
        }
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
let clearButton = document.querySelector('#clear-button');

clearButton.addEventListener('click',function (){
    dayButtons.forEach(function(button) {
        button.classList.remove('clicked');
    });
    dayCounter = 0;
    recalculateTotalCost();
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
let halfDayButton = document.querySelector('#half');
let fullDayButton = document.querySelector('#full');


halfDayButton.addEventListener('click',function() {
    dailyRate = 20;
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    recalculateTotalCost();
});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
let fullDay= document.querySelector('#full');
let halfDay= document.querySelector('#half');

fullDayButton.addEventListener('click',function() {
    dailyRate = 35;
    if (!fullDay.classList.contains('clicked')) {
        fullDay.classList.add('clicked');
    }
    if (halfDay.classList.contains('clicked')) {
        halfDay.classList.remove('clicked');
    }
    recalculateTotalCost();
});




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculateTotalCost() {
    let totalCost = dailyRate * dayCounter;
    elements.innerHTML = totalCost;
}