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

// food and drink

var CouplesQTY = 0;
var CoupleNum = 0;
var FamilyQTY = 0;
var FamilyNum = 0;

var CouplesPrice = 0;
var FamilyPrice = 0;

// add quantity on system

function addQTY(QTY){
    if(QTY == 'couplesPlus'){
        CouplesQTY = CouplesQTY + 1;
        CouplesPrice = CouplesQTY * 25;
        displayCouplesQTY();
        displayCouplesPrice();
    }
    else{
        FamilyQTY = FamilyQTY + 1;
        FamilyPrice = FamilyQTY * 30;
        displayFamilyQTY();
        displayFamilyPrice();
    }
}

// remove quantity on system

function removeQTY(QTY){
    if(QTY =='couplesMinus'){
        if(CouplesQTY > 0){
            CouplesQTY = CouplesQTY - 1;
            CouplesPrice = CouplesQTY * 25;
            displayCouplesQTY();
            displayCouplesPrice()
        }
    }
    else{
        if(FamilyQTY > 0){
            FamilyQTY = FamilyQTY - 1;
            FamilyPrice = FamilyQTY * 30;
            displayFamilyQTY();
            displayFamilyPrice();
        }
    }
}

// displace value of couple quantity 

function displayCouplesQTY(){
    document.getElementById("couplesQTYAmount").innerHTML = CouplesQTY;
}

// displace value of family quantity 

function displayFamilyQTY(){
    document.getElementById("familyQTYAmount").innerHTML = FamilyQTY;
}

// displace price of couples  

function displayCouplesPrice(){
    document.getElementById("couplesPriceAmount").innerHTML = CouplesPrice;
}

// displace price of family  

function displayFamilyPrice(){
    document.getElementById("familyPriceAmount").innerHTML = FamilyPrice;
}

// function of button skip and next

function toPay(){
    storeTotals();
    location.href = 'Payment.html';
}
function skipToPay(){
    CouplesQTY = 0;
     CoupleNum = 0;
     FamilyQTY = 0;
    FamilyNum = 0;

     CouplesPrice = 0;
     FamilyPrice = 0;
    storeTotals();
    location.href = 'Payment.html';
}

function storeTotals()
{
    var totalPrice = CouplesPrice + FamilyPrice;
    //Total price
    sessionStorage.setItem("totalPriceFood", totalPrice);
    //Number of food
    sessionStorage.setItem("totalCoupleNum",CouplesQTY);
    sessionStorage.setItem("totalFamilyNum",FamilyQTY);
    
    //Total Prices per ticket
    sessionStorage.setItem("totalCouplePrice",CouplesPrice.toFixed(2));
    sessionStorage.setItem("totalFamilyPrice",FamilyPrice.toFixed(2));
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









