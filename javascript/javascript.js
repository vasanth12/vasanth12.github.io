function validateName(){

	var firstname = document.getElementById("firstname").value;
	if(firstname.length == 0){
		producePrompt("Name is required", "fnerror", "red");
		return false;
	}
	if(!firstname.match(/^[A-za-z]*$/)){
		producePrompt("please enter valid name", "fnerror", "red");
		return false;
	}
	producePrompt("valid Name", "fnerror", "green");
		return true;
}




function validatePhone(){
	var phoneno = document.getElementById("phone").value;
	if(phoneno.length == 0){
		producePrompt("phone Number is required", "pnerror", "red");
		return false;
	}
	if(!phoneno.match(/^[0-9]{10}$/)){
		producePrompt("please enter valid phone Number", "pnerror", "red");
		return false;
	}
	producePrompt("valid Phone Number", "pnerror", "green");
		return true;
}

function validateEmail(){
	var email = document.getElementById("email").value;
	if(email.length == 0){
		producePrompt("Email is required", "emerror", "red");
		return false;
	}
	if(!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
		producePrompt("please enter valid email address", "emerror", "red");
		return false;
	}
	producePrompt(" valid Email address", "emerror", "green");
		return true;

}



function producePrompt(message, promptLocation, color){
	document.getElementById(promptLocation).innerHTML = message;
	document.getElementById(promptLocation).style.color = color;

}

function validateFormOnSubmit(){
	var firstname = document.getElementById("firstname").value;{
	if(firstname.length == 0){
		producePrompt("Name is required", "fnerror", "red");
		return false;
		}
		validateName();
	}


	var phoneno = document.getElementById("phone").value;{
	if(phoneno.length == 0){
		producePrompt("phone Number is required", "pnerror", "red");
		return false;
		}
		validatePhone();
	}
	var email = document.getElementById("email").value;{
	if(email.length == 0){
		producePrompt("Email is required", "emerror", "red");
		return false;
		}
		validateEmail();
	}

	

}
function validateEmail1(){
	var email1 = document.getElementById("email1").value;
	if(email1.length == 0){
		producePrompt("Email is required", "emerror1", "red");
		return false;
	}
	if(!email1.match(/^(([a-zA-Z\-0-9]+[^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
		producePrompt("please enter valid email address", "emerror1", "red");
		return false;
	}
	producePrompt(" valid Email address", "emerror1", "green");
		return true;

}
function producePrompt(message, promptLocation, color){
	document.getElementById(promptLocation).innerHTML = message;
	document.getElementById(promptLocation).style.color = color;

}

function validateEmail1OnSubmit(){
	var email1 = document.getElementById("email1").value;{
	if(email1.length == 0){
		producePrompt("Email is required", "emerror1", "red");
		return false;
		}
		validateEmail1();
	}
}
