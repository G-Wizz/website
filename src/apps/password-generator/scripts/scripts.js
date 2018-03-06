"use strict"




function generatePassword() {
	
	var result = "";
	var size = document.getElementById("input").value;
	var newNum = parseInt(size);
	var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+";

	if (newNum < 1 || newNum > 30 || isNaN(newNum)) {
		result = "Invalid entry, try again";

	} else {

		for (var i = 0; i < newNum; ++i) {
			result += characters.substr(Math.floor(Math.random() * characters.length), 1);
		}
	}

	document.getElementById("pwd").innerHTML = result;

};


var gen = document.getElementById("btn");
btn.onclick = generatePassword;
