var pingpong = function(inputNumber) {
	if ((inputNumber % 5 === 0) && (inputNumber % 3 === 0)) {
		return "pingpong";
	} else if (inputNumber % 3 === 0) {
		return "ping";
	} else if (inputNumber % 5 === 0) {
		return "pong";
	} else {
		return inputNumber;
	}
};

$(document).ready(function() {
	$("button#submit").click(function(event) {
		var inputNumber = parseInt($("input#putnumber").val());
		var result = pingpong(inputNumber);
		
		if (result === "ping") {
			alert("ping");
		} else if (result === "pong") {
			alert("pong");
		} else if (result === "pingpong") {
			alert("pingpong");
		} 
		$( '#putnumber' ).each(function(){
			this.reset();
		});
		event.preventDefault();
	});
});