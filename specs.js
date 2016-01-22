describe('createArray', function() {
	it("will create an array and fill it with all integers from 1 to the inputNumber", function() {
		expect(createArray(12)).to.eql([12,11,10,9,8,7,6,5,4,3,2,1]);
	});
});

describe('divisibleByThree', function() {
	it("will check to see if the inputNumber is divisible by 3, and if so, return 'ping'", function() {
		expect(divisibleByThree(9)).to.equal("ping");
	});
});
	
describe('divisibleByFive', function() {
	it("will check to see if the inputNumber is divisible by 5, and if so, return 'pong'", function() {
		expect(divisibleByFive(20)).to.equal("pong");
	});
});

describe('divisibleByThreeAndFive', function() {
	it("will check to see if a number is divisible by 3 and 5, and if so, will return 'pingpong'", function() {
		expect(divisibleByThreeAndFive(15)).to.equal("pingpong");
	});
});

describe('pingpong', function() {
	it("will search through array and convert all numbers divisible by 3, 5, and 3&5 to their respective strings", function() {
		expect(pingpong(15)).to.eql(["pingpong",14,13,"ping",11,"pong","ping",8,7,"ping","pong",4,"ping",2,1]);
	});
});