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
	
	integerArray.forEach(function(element, index) {
		if (divisibleByThreeAndFive(element) === 'pingpong') {
			integerArray[index] = 'pingpong';
		} else if (divisibleByThree(element) === 'ping') {
			integerArray[index] = 'ping';
		} else if (divisibleByFive(element) === 'pong') {
			integerArray[index] = 'pong';
		}
	});
	return integerArray;
}

$(document).ready(function() {
	$("button#submit").click(function(event){
		event.preventDefault();
		
		var inputNumber = parseInt($("input#putnumber").val());
		var result = pingpong(inputNumber);
		
		if (result === "ping") {
			$("ul#output").prepend("<li>Ping</li>");
		} else if (result === "pong") {
			$("ul#output").prepend("<li>Pong</li>");
		} else if (result === "pingpong") {
			$("ul#output").prepend("<li>Pingpong</li>");
		}
		
		$("input#putnumber").reset();
		
	});
});