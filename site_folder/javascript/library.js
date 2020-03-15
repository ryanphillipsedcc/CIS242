

//HomePage Scripts
//Shows popup about new items on homepage
function popupOffer(){
	var newWindow;
	newWindow = open("", "newOffer", "toolbar=1,location=1, width=300, height=200, left=575, top=300");
	newWindow.document.open();
	newWindow.document.write("<img src='../images/offer.jpg' height='200' width='300'/></a>");
	newWindow.document.close();
}

var baseCost = 0.0;
var itemTaxRate = 0.1;

//OrderPage - returns price and selections
function orderSummary(){
	
	var priceSubtotal = baseCost;
	var guitStyle = 1;
	var guitColor = 1;
	var guitFloyd = 1;
	var guitString =1;
	var guitTuning = 1;
	var itemTax = 0;
	var priceTotal = 0;
	var guitarText = "Order Summary:</td>";
	var strSummary = "";
	var priceSum = "";
	
	// check to see which guitar model is selected
	for (var i = 0; i < document.forms[0].guitarStyle.length; i++){
		if (document.forms[0].guitarStyle[i].checked){
			guitStyle = i;
		}
	}
	// check to see which color is selected
	for (var i = 0; i < document.forms[0].guitarColor.length; i++){
		if (document.forms[0].guitarColor[i].checked){
			guitColor = i;
		}
	}

		// check to see which string setup is selected
	for (var i = 0; i < document.forms[0].guitarString.length; i++){
		if (document.forms[0].guitarString[i].checked){
			guitString = i;
		}
	}
	// check to see which bridge is selected
	for (var i = 0; i < document.forms[0].guitarBridge.length; i++){
		if (document.forms[0].guitarBridge[i].checked){
			guitFloyd = i;
		}
	}
	// check to see which tuning is selected
	for (var i = 0; i < document.forms[0].guitarTuning.length; i++){
		if (document.forms[0].guitarTuning[i].checked){
			guitTuning = i;
		}
	}
//Disables options depending on selected guiatr style
		document.forms[0].guitarString[1].disabled = false;
		document.forms[0].guitarString[0].disabled = false;
		document.forms[0].guitarBridge[0].disabled = false;
		document.forms[0].guitarBridge[1].disabled = false;
		document.forms[0].guitarTuning[0].disabled = false;
		document.forms[0].guitarTuning[1].disabled = false;
		document.forms[0].guitarTuning[2].disabled = false;
		document.getElementById("finish").disabled = false;

	if (document.forms[0].guitarStyle[0].checked == true){
		document.getElementById("finish").value = "Vanta Black";
		document.getElementById("finish").disabled = true;
		document.forms[0].guitarString[1].checked = true;
		document.forms[0].guitarString[0].disabled = true;
		document.forms[0].guitarBridge[1].checked = true;
		document.forms[0].guitarBridge[0].disabled = true;
		document.forms[0].guitarTuning[1].checked = true;
		document.forms[0].guitarTuning[0].disabled = true;
		document.forms[0].guitarTuning[2].disabled = true;
	}
	else if (document.forms[0].guitarStyle[1].checked == true){
		document.getElementById("finish").value = "Sunburst";
		document.getElementById("finish").disabled = true;
		document.forms[0].guitarString[0].checked = true;
		document.forms[0].guitarString[1].disabled = true;
		document.forms[0].guitarBridge[0].checked = true;
		document.forms[0].guitarBridge[1].disabled = true;
		document.forms[0].guitarTuning[0].checked = true;
		document.forms[0].guitarTuning[1].disabled = true;
		document.forms[0].guitarTuning[2].disabled = true;	
	}
	else if (document.forms[0].guitarStyle[2].checked){
		document.getElementById("finish").value = "Corso Rosa";
		document.getElementById("finish").disabled = true;
		document.forms[0].guitarString[0].checked = true;
		document.forms[0].guitarString[1].disabled = true;
		document.forms[0].guitarBridge[1].checked = true;
		document.forms[0].guitarBridge[0].disabled = true;
		document.forms[0].guitarTuning[2].checked = true;
		document.forms[0].guitarTuning[0].disabled = true;
		document.forms[0].guitarTuning[1].disabled = true;		
	}		


//Gets Value of selected radio buttons
	var gString = document.getElementsByName('guitarString');
	var gString_value;
	for(var i = 0; i < gString.length; i++){
    if(gString[i].checked){
        gString_value = gString[i].value;
        break;
    	}
	}
	var gBridge = document.getElementsByName('guitarBridge');
	var gBridge_value;
	for(var i = 0; i < gBridge.length; i++){
    if(gBridge[i].checked){
        gBridge_value = gBridge[i].value;
        break;
    	}
	}
	var gTuning = document.getElementsByName('guitarTuning');
	var gTuning_value;
	for(var i = 0; i < gTuning.length; i++){
    if(gTuning[i].checked){
        gTuning_value = gTuning[i].value;
        break;
    	}
	}

	// sets Guitar Style & price per style - Need to figure out how to get Radio Values to propagate.
	switch(guitStyle){
		case 0:
		  guitarText = guitarText + '<br /><em> Face-Melter'; 
		  priceSubtotal = 999.95;
		  break;
		case 1:
		  guitarText = guitarText + '<br /><em> Blues ';
		  priceSubtotal = 1495.95;
		  break;
		case 2:
		  guitarText = guitarText + '<br /><em> Classic Rock ';
		  priceSubtotal = 1999.95;
		  break;
		case 3:
		  guitarText = guitarText + '<br /><em> Custom ';
		  priceSubtotal = 8999.95;
		  break;
	}
	guitarText += "<br />" + "Color: " + document.getElementById("finish").value + "<br/>" + gString_value +  "<br/>" + gBridge_value + "<br/>" + gTuning_value;

	//total calcs & cookie settings
	priceSubtotal = priceSubtotal.toFixed(2);
	itemTax = priceSubtotal * itemTaxRate;
	itemTax = itemTax.toFixed(2);
	priceTotal = parseFloat(priceSubtotal) + parseFloat(itemTax);
	
	priceTotal = parseFloat(priceTotal);
	priceTotal = priceTotal.toFixed(2);
		
	SetCookie("guitarText", guitarText);
	SetCookie("priceSubtotal", priceSubtotal);
	SetCookie("itemTax", itemTax);
	SetCookie("priceTotal", priceTotal);
	
	//replaces divs with DHTML
	strSummary = guitarText;
	
	priceSum = "<table class='center'><div id='orderSub'><tr><td>Subtotal:</td><td align='right'>"+ priceSubtotal +"</td></tr></div><div id='orderTax'><tr><td>Tax:</td><td align='right'>" + itemTax + "</td></tr></div><td><div id='orderTotal'><tr><td>Total:</td><td align='right'>" + priceTotal + "</td></tr></div></table>"
	
	document.getElementById("orderSumm").innerHTML = strSummary;
	document.getElementById("orderSub").innerHTML = priceSum;
	
	
	return true;

}

//Saves ordered guitar to display on customer info page
function writeGuitCookies(){

	SetCookie("GuitarDesc", document.getElementById("orderSumm").innerHTML);
	SetCookie("PriceSum", document.getElementById("orderSub").innerHTML);
	window.location.href = "custsummary.html";
	
	return true;
}

//Saves cust data for customer summary page
function writeCustomerCookie(form){
	SetCookie("customerName", document.forms[0].firstName.value + "&nbsp;" + document.forms[0].lastName.value + "<br/>");
	SetCookie("customerAddress", document.forms[0].customerAddress.value + "<br/>");
	SetCookie("customerCity", document.forms[0].customerCity.value + "&comma;&nbsp;" + document.forms[0].customerState.value + "&nbsp;" + document.forms[0].customerZip.value + "<br/>");
	SetCookie("customerPhone", document.forms[0].customerPhone.value + "<br/>");
	SetCookie("customerEmail", document.forms[0].customerEmail.value);
	window.location.href = "confirm.html";
	return true;

	function replaceString(stringValue){

	newString = stringValue;
	
	newString = newString.replace('"','&quot;');
	newString = newString.replace("'", '&apos;');
	newString = newString.replace("–", '&ndash;');
	newString = newString.replace("—", '&mdash;');
	newString = newString.replace("¡", '&iexcl;');
	newString = newString.replace("¿", '&iquest;');
	newString = newString.replace("“", '&ldquo;');
	newString = newString.replace("”", '&rdquo;');
	newString = newString.replace("‘", '&lsquo;');
	newString = newString.replace("’", '&rsquo;');
	newString = newString.replace("«", '&laquo;');
	newString = newString.replace("»", '&raquo;');
	newString = newString.replace(" ", '&nbsp;');
	newString = newString.replace("&", '&amp;');
	newString = newString.replace("¢", '&cent;');
	newString = newString.replace("©", '&copy;');
	newString = newString.replace("÷", '&divide;');
	newString = newString.replace(">", '&gt;');
	newString = newString.replace("<", '&lt;');
	newString = newString.replace("<", '&lt;');
	newString = newString.replace(",", '&comma;');

	return newString;
	}
}

//Checks form index and returns blank if not an apt.
function clearThis(){
	
	var formIndex = 0;
	var intStartCheck = 0;
	var intNumFields = document.forms[formIndex].elements.length - 1;
	
	for (var i = intStartCheck; i < intNumFields; i++){
		if (document.forms[formIndex].elements[i].name != "customerApartment"){
			document.getElementById(document.forms[formIndex].elements[i].name).innerHTML = "";
		}
	}		
	
	return true;
}

//Jquery Form validation for form fields during checkout
$(document).ready(function() {
  $("#customerInfo").validate({
    rules: {
      customerEmail: {
        required: true,
        email: true
      },
      customerPhone: 'customphone',
   	submitHandler: function(form) { 
      form.submit(); 
   	}, 
   }
  });
});

//JQuery validator method - requires dashes with phone
$.validator.addMethod('customphone', function (value, element) {
    return this.optional(element) || /^\d{3}-\d{3}-\d{4}$/.test(value);
}, "Please use format 123-456-7890");

//Start Timer Coundown
var milisec=0;
var seconds=60;
var minutes=120;

/* ----------------------------------------------
function secondPassed(){
purpose:	Count down clock for delivery
author:	
parameters:		none
---------------------------------------------- */ 
// 1800 seconds in 30 minutes
var seconds = 20;

function secondPassed() {
// Calculate the number of days left
    var days=Math.floor(seconds / 86400); 
// After deducting the days calculate the number of hours left
    var hours = Math.floor((seconds - (days * 86400 ))/3600)
// After days and hours , how many minutes are left 
    var minutes = Math.floor((seconds - (days * 86400 ) - (hours *3600 ))/60)
// Finally how many seconds left after removing days, hours and minutes. 
   var secs = Math.floor((seconds - (days * 86400 ) - (hours *3600 ) - (minutes*60)))

   var x = days + " Days " + hours + " Hours " + minutes + " Minutes and " + secs + " Seconds ";
   document.getElementById('countdown').innerHTML = x;

   
	// create an alternate display if PC has not arrived
	if (seconds == 0) {
   	clearInterval(countdownTimer);
      document.getElementById('countdown').innerHTML = "DING! Your axe hath arrived!";
   }
	else {
   	seconds--;
   }
	
	return true;
	
}
 
var countdownTimer = setInterval('secondPassed()', 1000);

//Contact Page
//Checks email/comment entry for Contact Page - handrwitten vs. Jquery
function chForm2(){
	var emailExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	
	if (!emailExp.test(document.forms[0].contactEmail.value)){
		alert("Email format is incorrect, please re-enter.")
	}

	else if (document.forms[0].comments.value == 0){
		alert("Please enter the nature of your inquiry.")
	}

	else {
		alert("Thank you for your inquiry. We will get back to you as soon as possible.")
	}
}	


