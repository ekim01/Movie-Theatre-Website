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
    document.getElementById('id01').style.display='none';
    document.getElementById('id02').style.display='block';
}

function showForm3() {
    document.getElementById('id02').style.display='none';
    document.getElementById('id03').style.display='block';
}

function showForm4() {
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
    
}







