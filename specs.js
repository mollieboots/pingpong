describe('pingpong', function() {
	it("will check to see if thee inputNumber is divisible by 3, and if so, return 'ping'", function() {
		expect(pingpong(9)).to.equal("ping");
	});
	
	it("will check to see if the inputNumber is divisible by 5, and if so, return 'pong'", function() {
		expect(pingpong(20)).to.equal("pong");
	});
	
	it("will check to see if a number is divisible by 3 and 5, and if so, will return 'pingpong'", function() {
		expect(pingpong(15)).to.equal("pingpong");
	});
});