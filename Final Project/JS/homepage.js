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
