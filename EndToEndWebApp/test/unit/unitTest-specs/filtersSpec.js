'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {

  beforeEach(module('phoneModule'));

  describe('checkmark Filter test', function() {

    it('should convert boolean values to unicode checkmark or cross',
        inject(function(checkmarkFilter) {
      expect(checkmarkFilter(true)).toBe('\u2713');
      expect(checkmarkFilter(false)).toBe('\u2718');
    }));
  });
});