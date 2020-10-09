var poolSize = 1;
var cellTotalNum = 1;

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
    else if(event.target.id == 'pay00') {
        document.getElementById('pay00').style.display = 'none';
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

function displayTotal()
{
    document.getElementById("showTotal").innerHTML = getTotalPrice();   
}
function displayTotal2()
{
    document.getElementById("showTotal2").innerHTML = "Total Amount: $"+getTotal();   
}

function deleteRow()
{
    
    if(poolSize == 1)
    {
        
    }else
    {
        //var i=row.parentNode.parentNode.rowIndex;
        document.getElementById('customers').deleteRow(poolSize);
        poolSize = poolSize - 1;
        
        /*Update all prices*/
        /*Update all prices*/
        var cellTotalID = "";
        var cellPercentID = "";
        
        var validTotalCell;
        var validTotalPercent;
        
        var priceTotal = getTotalPrice();
        var totalPercent = getTotalPercent();
        
        document.getElementById('personalAmount').innerHTML = "Payment Amount: $" + priceTotal;
        document.getElementById('personalAmount3').innerHTML = "Payment Amount: $" + priceTotal;
        document.getElementById('showTotal').innerHTML = priceTotal;
        
        for(var i = 1; i <= poolSize; i++) {
            cellTotalID = "cellTotal_" + i;
            validTotalCell = document.getElementById(cellTotalID);
            
            cellPercentID = "cellPercentage_" +i;
            validTotalPercent = document.getElementById(cellPercentID);
            
            if(poolSize != 1)
            {
                if(validTotalCell !== null) {
                    validTotalCell.innerHTML = priceTotal;
                    validTotalPercent.innerHTML = totalPercent;
                }
            }else
            {
                
                validTotalCell.innerHTML = "";
                validTotalPercent.innerHTML = "";
            }
            //document.getElementById(cellTotalID).innerHTML = totalPrice;
        }
        displayPercent();
    }
}

function insRow()
{
    
    if(poolSize<6){
        var x = document.getElementById('customers');
        var new_row = x.rows[poolSize+1].cloneNode(true);
        
        var cell = new_row.cells[2];
        var cellp = new_row.cells[1];
        
       // document.getElementById("showPercent").innerHTML = displayPercent();
        //console.log( displayPercent());
        //console.log(poolSize)
        
        x.appendChild( new_row );
        poolSize = poolSize + 1;
        //totalPrice();
        cell.id = "cellTotal_" + poolSize;
        cellp.id = "cellPercentage_" + poolSize;
        
        //cellTotalNum += 1;
        
              
        /*Update all prices*/
        
        var cellTotalID = "";
        var cellPercentID = "";
        
        var validTotalCell;
        var validTotalPercent;
        
        var priceTotal = getTotalPrice();
        var totalPercent = getTotalPercent();
        
        document.getElementById('personalAmount').innerHTML = "Payment Amount: $" + priceTotal;
        document.getElementById('personalAmount3').innerHTML = "Payment Amount: $" + priceTotal;
        document.getElementById('showTotal').innerHTML = totalPercent;
        console.log(poolSize)
        
        for(var i = 1; i <= poolSize; i++) {
            cellTotalID = "cellTotal_" + i;
            validTotalCell = document.getElementById(cellTotalID);
            
            cellPercentID = "cellPercentage_" +i;
            validTotalPercent = document.getElementById(cellPercentID);
            
            if(i<poolSize){
                if(validTotalCell !== null) {
                    console.log("hi")
                    validTotalCell.innerHTML = priceTotal;
                    validTotalPercent.innerHTML = totalPercent;
            }
        }
            //document.getElementById(cellTotalID).innerHTML = totalPrice;
        }
        displayPercent();
        displayTotal();
    }
}

function displayPercent()
{
     document.getElementById("showPercent").innerHTML = getTotalPercent();
}


function showPay2() {
    document.getElementById('pay01').style.display='none';
    document.getElementById('pay02').style.display='block';
    
    /*Testing*/
    var priceTotal = getTotal();
    var payTotal = getTotalPrice();
    document.getElementById('numTickets').innerHTML = sessionStorage.getItem("totalTicketNum")+" Tickets";
    document.getElementById('personalAmount2').innerHTML = "Payment Amount: $" + priceTotal;
    document.getElementById('personalAmount').innerHTML = "Payment Amount: $" + payTotal;
}
function showPay25() {
    document.getElementById('pay020').style.display='none';
    document.getElementById('pay025').style.display='block';
    var payTotal = getTotalPrice();
    document.getElementById('personalAmount3').innerHTML = "Payment Amount: $" + payTotal;
}
function showPay3() {
    document.getElementById('pay01').style.display='none';
    document.getElementById('pay02').style.display='none';
    document.getElementById('pay025').style.display='none';
    document.getElementById('pay03').style.display='block';
}
function showPay4(){
    document.getElementById('pay03').style.display='none';
    document.getElementById('pay04').style.display='block';
}

function backToPay3(){
    document.getElementById('pay04').style.display='none';
    document.getElementById('pay03').style.display='block';
}
/*Testing*/

function getTotal()
{
    var ticketTotal = parseInt(sessionStorage.getItem("totalPriceTest"));
    var foodTotal = parseInt(sessionStorage.getItem("totalPriceFood"));
    return (ticketTotal + foodTotal).toFixed(2);
    
}

function getTotalPrice() {
    /*var priceTotal = (50/poolSize).toFixed(2);*/
    
    var localTotal = getTotal();
    var priceTotal = (localTotal/poolSize).toFixed(2);
    
    return priceTotal;
}



$(this).click(function(event) {
    console.log(event.target.id);
    
});

function getTotalPercent(){
    var totalPercent = (100/poolSize).toFixed(2);
    return totalPercent;
}

function receipt(type){
    document.getElementById('pay00').style.display='block';

    
    
    if(sessionStorage.getItem("totalFamilyNum") > 0)
    {
        document.getElementById("totalFamilyNum").innerHTML = sessionStorage.getItem("totalFamilyNum");
        document.getElementById("totalFamilyPrice").innerHTML = sessionStorage.getItem("totalFamilyPrice");
    }else
    {
        document.getElementById("totalFamilyNum").style.display = 'none'; 
        document.getElementById("totalFamilyPrice").style.display = 'none'; 
        document.getElementById("fcombo").style.display = 'none'; 
    }
    
    if(sessionStorage.getItem("totalCoupleNum") > 0)
    {
        document.getElementById("totalCoupleNum").innerHTML = sessionStorage.getItem("totalCoupleNum");
        document.getElementById("totalCouplePrice").innerHTML = sessionStorage.getItem("totalCouplePrice");
        
    }else
    {
        document.getElementById("totalCoupleNum").style.display = 'none'; 
        document.getElementById("totalCouplePrice").style.display = 'none'; 
        document.getElementById("ccombo").style.display = 'none'; 
    }


    if(sessionStorage.getItem("totalChildNum") > 0)
    {
        console.log("totalChildNum");
        document.getElementById("movieChild").innerHTML = "Child ticket for: "+sessionStorage.getItem("movie");
        document.getElementById("totalChildPrice").innerHTML = sessionStorage.getItem("totalChildPrice");
        document.getElementById("totalChildNum").innerHTML = sessionStorage.getItem("totalChildNum");
    }else
    {
        document.getElementById("totalChildNum").style.display = 'none';   
        document.getElementById("totalChildPrice").style.display = 'none'; 
        document.getElementById("movieChild").style.display = 'none'; 
    }
    
    if(sessionStorage.getItem("totalSeniorNum") > 0)
    {
        document.getElementById("movieSenior").innerHTML = "Senior ticket for: "+sessionStorage.getItem("movie");
        document.getElementById("totalSeniorPrice").innerHTML = sessionStorage.getItem("totalSeniorPrice");
        document.getElementById("totalSeniorNum").innerHTML = sessionStorage.getItem("totalSeniorNum");
    }else
    {
        document.getElementById("totalSeniorNum").style.display = 'none';   
        document.getElementById("totalSeniorPrice").style.display = 'none'; 
        document.getElementById("movieSenior").style.display = 'none'; 
    }
    
    if(sessionStorage.getItem("totalAdultNum") > 0)
    {
        document.getElementById("movieAdult").innerHTML = "Adult ticket for: "+sessionStorage.getItem("movie");
        document.getElementById("totalAdultPrice").innerHTML = sessionStorage.getItem("totalAdultPrice");
        document.getElementById("totalAdultNum").innerHTML = sessionStorage.getItem("totalAdultNum");
    }else
    {
        document.getElementById("totalAdultNum").style.display = 'none';   
        document.getElementById("totalAdultPrice").style.display = 'none'; 
        document.getElementById("movieAdult").style.display = 'none'; 
    }
    
    document.getElementById("receiptTotal").innerHTML = "$"+getTotal();
    
    
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


