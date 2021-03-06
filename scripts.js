// Business Logic

var createArray = function(inputNumber) {
	var integerArray = [];
	for (var inputNumber = inputNumber; inputNumber > 0 ; inputNumber -= 1) {
		integerArray.push(inputNumber);
	}
	return integerArray;
};

var divisibleByThree = function(inputNumber) {
	if (inputNumber % 3 === 0) {
		return "ping";
	}
};

var divisibleByFive = function(inputNumber) {
	if (inputNumber % 5 === 0) {
		return "pong";
	}
};

var divisibleByThreeAndFive = function(inputNumber) {
	if ((inputNumber % 5 === 0) && (inputNumber % 3 === 0)) {
		return "pingpong";
	}
};

var pingpong = function(inputNumber) {
	var integerArray = createArray(inputNumber);
	
	integerArray.forEach(function(inputNumber, index, integerArray) {
		if (divisibleByThreeAndFive(inputNumber) === 'pingpong') {
			integerArray[index] = 'pingpong';
		} else if (divisibleByThree(inputNumber) === 'ping') {
			integerArray[index] = 'ping';
		} else if (divisibleByFive(inputNumber) === 'pong') {
			integerArray[index] = 'pong';
		}
	});
	return integerArray;
}

// User Interface Logic

$(document).ready(function() {
	$("button#submit").click(function(event){
		event.preventDefault();
		
		var inputNumber = $("input#putnumber").val();
		var result = pingpong(inputNumber);
		
		result.forEach(function(inputNumber) {
			$("ul#output").prepend("<li>" + inputNumber + "</li>");
		});
	});
});