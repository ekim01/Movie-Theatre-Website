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



// choose movies showtimes page

var count = 0;
var temp;  // temporary to store value of q
function changeColor(time){
    var q = document.getElementById(time);  // value of choose
    if(count == '0'){
        q.style.backgroundColor="#1048a3";
        temp = q;
        count++;
    }
    else{
        q.style.backgroundColor="#1048a3";
        temp.style.backgroundColor="#404040";
        temp = q;
    }
}

// Seat info Page

function seatIsFull(type){
    document.getElementById('s1').style.display='none';
    if(type == 's2'){
        document.getElementById('s2').style.display='block';
    }
    if(type == 's3'){
        document.getElementById('s3').style.display='block';
    }
}

// back to showtimes page
function backS(type){
    if(type == 's2'){
        document.getElementById('s2').style.display='none';
        document.getElementById('s1').style.display='block';
    }
    else{
        document.getElementById('s3').style.display='none';
        document.getElementById('s1').style.display='block';
    }
}

function seatSelect(){
    
}







