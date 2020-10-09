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

function displayTotal()
{
    document.getElementById("showTotal").innerHTML = getTotalPrice();   
}

function displayPercent()
{
     document.getElementById("showPercent").innerHTML = getTotalPercent();
}

function deleteRow()
{
    console.log(poolSize)
    if(poolSize == 1)
    {
    }else
    {
        //var i=row.parentNode.parentNode.rowIndex;
        document.getElementById('customers').deleteRow(poolSize+1);
        poolSize = poolSize - 1;
        
        /*Update all prices*/
        /*Update all prices*/
        var cellTotalID = "";
        var cellPercentID = "";
        
        var validTotalCell;
        var validTotalPercent;
        
        var totalPrice = getTotalPrice();
        var totalPercent = getTotalPercent();
        
        document.getElementById('personalAmount').innerHTML = "Payment Amount: $" + totalPrice;
        document.getElementById('showTotal').innerHTML = totalPrice;
        
        for(var i = 1; i <= poolSize; i++) {
            cellTotalID = "cellTotal_" + i;
            validTotalCell = document.getElementById(cellTotalID);
            
            cellPercentID = "cellPercentage_" +i;
            validTotalPercent = document.getElementById(cellPercentID);
            
            
            if(validTotalCell !== null) {
                validTotalCell.innerHTML = totalPrice;
                validTotalPercent.innerHTML = totalPercent;
        }
            //document.getElementById(cellTotalID).innerHTML = totalPrice;
        }
        displayPercent();
    }
    console.log(poolSize)
}

function insRow()
{
    console.log(poolSize)
    var x = document.getElementById('customers');
    var new_row = x.rows[2].cloneNode(true);
    
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
    
    var totalPrice = getTotalPrice();
    var totalPercent = getTotalPercent();
    
    document.getElementById('personalAmount').innerHTML = "Payment Amount: $" + totalPrice;
    document.getElementById('showTotal').innerHTML = totalPrice;
    
    for(var i = 1; i <= poolSize; i++) {
        cellTotalID = "cellTotal_" + i;
        validTotalCell = document.getElementById(cellTotalID);
        
        cellPercentID = "cellPercentage_" +i;
        validTotalPercent = document.getElementById(cellPercentID);
        
        
        if(validTotalCell !== null) {
            validTotalCell.innerHTML = totalPrice;
            validTotalPercent.innerHTML = totalPercent;
    }
        //document.getElementById(cellTotalID).innerHTML = totalPrice;
    }
    displayPercent();
    console.log(poolSize)
}

function showPay2() {
    document.getElementById('pay01').style.display='none';
    document.getElementById('pay02').style.display='block';
    
    /*Testing*/
    var totalPrice = getTotalPrice();
    document.getElementById('personalAmount').innerHTML = "Payment Amount: $" + totalPrice;
}
function showPay25() {
    document.getElementById('pay020').style.display='none';
    document.getElementById('pay025').style.display='block';
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
function getTotalPrice() {
    var totalPrice = (50/poolSize).toFixed(2);
    return totalPrice;
}

$(this).click(function(event) {
    console.log(event.target.id);
    
});

function getTotalPercent(){
    var totalPercent = (100/poolSize).toFixed(2);
    return totalPercent;
}

