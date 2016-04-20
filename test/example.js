var assert = require('assert');
describe('Base', function() {
	describe('add', function () {
		it('should return 4', function () {
			assert.equal(2*2, 4);
			assert.equal(2+2, 4);
		});
	});
});
describe('Array', function() {
	describe('#indexOf()', function () {
		it('should return -1 when the value is not present', function () {
			assert.equal(-1, [1,2,3].indexOf(5));
			assert.equal(-1, [1,2,3].indexOf(0));
		});
	});
});
