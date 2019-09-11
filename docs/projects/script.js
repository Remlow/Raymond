function validateForm() {
	var a = document.forms["registrationForm"]["fName"].value;
	var b = document.forms["registrationForm"]["lName"].value;
	var c = document.forms["registrationForm"]["email"].value;
	var d = document.forms["registrationForm"]["address"].value;
	var e = document.forms["registrationForm"]["suburb"].value;
	var f = document.forms["registrationForm"]["location"].value;
	
	if ((a && b && c && d && e && f) == "") {
		alert("All fields must be filled");
	} else {
		alert("Congrats you are now subscribed to PET inc.");
	}
}