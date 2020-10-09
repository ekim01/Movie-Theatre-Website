var childTicket = 0;
var adultTicket = 0;
var seniorTicket = 0;
var totalTicket = 0;

var childPrice = 0;
var adultPrice = 0;
var seniorPrice = 0;
var totalPrice = 0;

var remainingSeat = 0;

const childIncrement = 5;
const adultIncrement = 10;
const seniorIncrement = 7;


// Display total price and tickets
function displayTotalTickets(){
    document.getElementById("showTotalTicket").innerHTML = totalTicket;
}
//display the total price of children tickets
function displayTotalPrice(){
    document.getElementById("showTotalPrice").innerHTML = totalPrice;
}
    

// Child ticket Amount and Price Calculations
//
//display the amount of tickets
function displayChild(){
    document.getElementById("showChildTicket").innerHTML = childTicket;
}
//display the total price of children tickets
function displayChildPrice(){
    document.getElementById("showChildPrice").innerHTML = childPrice;
}
    
//add a child ticket on system
function addChild() {
    childTicket = childTicket + 1;
    totalTicket = totalTicket + 1;
    childPrice = childTicket * childIncrement;
    totalPrice = totalPrice + childIncrement;
    displayChild();
    displayChildPrice();
    displayTotalTickets();
    displayTotalPrice();
}

//remove a child ticket on system
function subChild() {
    if (childTicket > 0) {
        childTicket = childTicket - 1;
        totalTicket = totalTicket - 1;
        childPrice = childTicket * childIncrement;
        totalPrice = totalPrice - childIncrement;
        displayChild();
        displayChildPrice();
        displayTotalTickets();
        displayTotalPrice();
    }
}
//
// END OF Child ticket Amount and Price Calculations


// Adult ticket Amount and Price Calculations
//
//display the amount of tickets
function displayAdult(){
    document.getElementById("showAdultTicket").innerHTML = adultTicket;
}
//display the total price of Adult tickets
function displayAdultPrice(){
    document.getElementById("showAdultPrice").innerHTML = adultPrice;
}
    
//add a adult ticket on system
function addAdult() {
    adultTicket = adultTicket + 1;
    totalTicket = totalTicket + 1;
    adultPrice = adultTicket * adultIncrement;
    totalPrice = totalPrice + adultIncrement;
    displayAdult();
    displayAdultPrice();
    displayTotalTickets();
    displayTotalPrice();
}

//remove a adult ticket on system
function subAdult() {
    if (adultTicket > 0) {
        adultTicket = adultTicket - 1;
        totalTicket = totalTicket - 1;
        adultPrice = adultTicket * adultIncrement;
        totalPrice = totalPrice - adultIncrement;
        displayAdult();
        displayAdultPrice();
        displayTotalTickets();
        displayTotalPrice();
    }
}
//
// END OF Adult ticket Amount and Price Calculations

// Senior ticket Amount and Price Calculations
//
//display the amount of tickets
function displaySenior(){
    document.getElementById("showSeniorTicket").innerHTML = seniorTicket;
}
//display the total price of senior tickets
function displaySeniorPrice(){
    document.getElementById("showSeniorPrice").innerHTML = seniorPrice;
}
    
//add a senior ticket on system
function addSenior() {
    seniorTicket = seniorTicket + 1;
    totalTicket = totalTicket + 1;
    seniorPrice = seniorTicket * seniorIncrement;
    totalPrice = totalPrice + seniorIncrement;
    displaySenior();
    displaySeniorPrice();
    displayTotalTickets();
    displayTotalPrice();
    
    //test
    //sessionStorage.setItem("totalPriceTest", totalPrice);
console.log(localStorage.getItem("totalPriceTest"));
}

//remove a senior ticket on system
function subSenior() {
    if (seniorTicket > 0) {
        seniorTicket = seniorTicket - 1;
        totalTicket = totalTicket - 1;
        seniorPrice = seniorTicket * seniorIncrement;
        totalPrice = totalPrice - seniorIncrement;
        displaySenior();
        displaySeniorPrice();
        displayTotalTickets();
        displayTotalPrice();
    }
}
//
// END OF Senior ticket Amount and Price Calculations

//When pressing next, the seat selection will pop up, also sets the remaining seat the to the total amount of tickets purchased
function showSeatSelection(){
    
    if (totalTicket < 1){
        alert("Please select a ticket")
    }else
    {
        if (totalTicket > 13){
            alert("The theater can't hold this many people");
        } else {
            remainingSeat = totalTicket;
            document.getElementById('ticketChart').style.display ='none';
            document.getElementById('seatSelection').style.display='table';
            storeTotals();
            displaySeatRemaining();
        }
    }
}

//shows the total ticket purchased on the seat selection screen
function displaySeatRemaining(){
    document.getElementById("seatRemaining").innerHTML = remainingSeat;
}


function resetSeat(){
    var seatList = document.getElementsByClassName("availSeat");
    var totalSeats = 13;
    var counter = 0;
    while (counter < totalSeats){
        seatList[counter].style.backgroundColor = 'white';
        seatList[counter].name = 'avail';
        counter ++;
    }
}

//back from ticket selection screen to ticket purchase
function showTicketChart(){
    document.getElementById('seatSelection').style.display='none';
    document.getElementById('ticketChart').style.display ='table';
    resetSeat();
}

//The function is allowing the user to book seats based on the total tickets they've purchased.
function reserveSeat(btn){
    var clicked = false;
    var property = document.getElementById(btn);
    if (remainingSeat > 0){
        if (property.name == 'avail') {
            remainingSeat = remainingSeat - 1;
            displaySeatRemaining();
            property.style.backgroundColor = 'green';
            property.name = 'unavail';
        } else {
            remainingSeat = remainingSeat + 1;
            displaySeatRemaining();
            property.style.backgroundColor = 'white';
            property.name = 'avail';
        }
    } else {
        if (property.name == 'unavail') {
            remainingSeat = remainingSeat + 1;
            displaySeatRemaining();
            property.style.backgroundColor = 'white';
            property.name = 'avail';
        }   
    }
}

function showFoodPage(){
    console.log(remainingSeat);
    if (remainingSeat > 0){
        alert("please select all your seats");
    } else {
        location.href = 'Food_Drink.html';
    }
}









$(this).click(function(event) {
    if(event.target.id == 'id01') {
        document.getElementById('id01').style.display='none';
    } 
    else if(event.target.id == 'id02') {
        document.getElementById('id02').style.display='none';
    }
    else if(event.target.id == 'id03') {
        document.getElementById('id03').style.display='none';
    }
    else if(event.target.id == 'id04') {
        document.getElementById('id04').style.display='none';
    }
    else if(event.target.id == 'id05') {
        document.getElementById('id05').style.display = 'none';
    }
    console.log(event.target.id);
});

function showForm2() {
    var empty = isForm1Empty();
    
    if(empty) {
        alert("Please fill out all required fields.");
    }
    else
    {
        document.getElementById('id01').style.display='none';
        document.getElementById('id02').style.display='block';
    }
}

function showForm3() {
    var empty = isForm2Empty();
    var password = document.getElementById('password').value;
    var confirmPass = document.getElementById('confirmPassword').value;
    
    if(empty) {
        alert("Please fill out all required fields.");
    }
    else if(password != confirmPass) {
        alert("Password fields do not match!");
    }
    else
    {
        document.getElementById('id02').style.display='none';
        document.getElementById('id03').style.display='block';
    }
}

function showForm4() {
    var empty = isForm3Empty();
    
    if(empty) {
        alert("Please fill out all required fields.");
    }
    else
    {
        document.getElementById('id03').style.display='none';
        document.getElementById('id04').style.display='block';
    }
}

function form3Skip() {
    document.getElementById('id03').style.display='none';
    document.getElementById('id04').style.display='block';
}

function backToForm1() {
    document.getElementById('id02').style.display='none';
    document.getElementById('id01').style.display='block';
}

function backToForm2() {
    document.getElementById('id03').style.display='none';
    document.getElementById('id02').style.display='block';
}

function backToForm3() {
    document.getElementById('id04').style.display='none';
    document.getElementById('id03').style.display='block';
}

function showVerificationEmail() {
    var empty = isForm4Empty();
    
    if(empty) {
        alert("Please fill out all required fields.");
    }
    else {
        document.getElementById('id04').style.display='none';
        document.getElementById('id05').style.display='block';
        document.getElementById('thankYouName').innerHTML = getThankYouName();
        document.getElementById('thankYouEmail').innerHTML = getEmailAddress();
    }
}

function form4Skip() {
    document.getElementById('id04').style.display='none';
    document.getElementById('id05').style.display='block';
    document.getElementById('thankYouName').innerHTML = getThankYouName();
    document.getElementById('thankYouEmail').innerHTML = getEmailAddress();
}


/*get the name and email of the user who signs up*/
function getThankYouName() {
    var fullName = "Thank you ";
    
    fullName += document.getElementById('firstName').value + "!";
    /*fullName += " " + document.getElementById('lastName').value + "!";*/
    
    return fullName;
}

function getEmailAddress() {
    var emailAddress = "";
    
    emailAddress += document.getElementById('emailAddress').value;
    
    return emailAddress;
}

function storeTotals()
{
    //Total price
    sessionStorage.setItem("totalPriceTest", totalPrice);
    //Number of tickets
    sessionStorage.setItem("totalChildNum",childTicket);
    sessionStorage.setItem("totalAdultNum",adultTicket);
    sessionStorage.setItem("totalSeniorNum",seniorTicket);
    sessionStorage.setItem("totalTicketNum",totalTicket);
    //Total Prices per ticket
    sessionStorage.setItem("totalChildPrice",childPrice.toFixed(2));
    sessionStorage.setItem("totalAdultPrice",adultPrice.toFixed(2));
    sessionStorage.setItem("totalSeniorPrice",seniorPrice.toFixed(2));
}

function isForm1Empty() {
    var result = false;
    
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('emailAddress').value;
    /*var username = document.getElementById('userName').value;
    var password = document.getElementById('password').value;
    var confirmPass = document.getElementById('confirmPassword').value;*/
    
    if(firstName === "" || lastName === "" || email === "")
    {
        result = true;
    }
    
    return result;
}

function isForm2Empty() {
    var result = false;

    var username = document.getElementById('userName').value;
    var password = document.getElementById('password').value;
    var confirmPass = document.getElementById('confirmPassword').value;
    
    if(username === "" || password === "" || confirmPass === "")
    {
        result = true;
    }
    
    return result;
}

function isForm3Empty() {
    var result = false;
    
    var firstName = document.getElementById('creditFirstName').value;
    var lastName = document.getElementById('creditLastName').value;
    var creditNum = document.getElementById('creditNum').value;
    var month = document.getElementById('expireMM').value;
    var year = document.getElementById('expireYY').value;
    var cvv = document.getElementById('creditCVV').value;
    
    if(firstName === "" || lastName === "" || creditNum === "" || month === "" || year === "" || cvv === "")
    {
        result = true;
    }
    
    return result;
}

function isForm4Empty() {
    var result = false;
    
    var firstName = document.getElementById('pointFirstName').value;
    var lastName = document.getElementById('pointLastName').value;
    var pointNum = document.getElementById('pointNum').value;
    
    if(firstName === "" || lastName === "" || pointNum === "")
    {
        result = true;
    }
    
    return result;
}



