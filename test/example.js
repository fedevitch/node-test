var assert = require('assert');
describe('Base', function() {
	describe('add&multiply', function () {
		it('should return 4', function () {
			assert.equal(2*2, 4);
			assert.equal(2+2, 4);
		});
		it('should return 8', function () {
			assert.equal(2*2*2, 8);
			assert.equal(4+4, 4*2);
		});
		it('should return 1488', function () {
			assert.equal(1400+88, 1488);
			assert.equal(1400+22*4, 1488);
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
