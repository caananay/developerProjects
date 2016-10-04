Calculator = function(){
	this.value = 0;
};

Calculator.prototype.add = function(number){
	if(typeOf(number) == "number"){
		this.value += number;
	} else {
		alert("Argument must be a number");
	}
};

Calculator.prototype.subtract = function(number){
	if(typeOf(number) == "number"){
		this.value -= number;
	} else {
		alert("Argument must be a number");
	}
};
/*function addition(firstNumber, secondNumber){
	if (typeOf(firstNumber) == "number" && typeOf(secondNumber) == "number"){
	var sum = firstNumber + secondNumber;
	return sum;
} else {
	alert("Arguments must both be a number");
}
}*/