'use strict';

describe('Service: myBooks', function () {

  // load the service's module
  beforeEach(module('psApp'));

  // instantiate service
  var myBooks;
  beforeEach(inject(function (_myBooks_) {
    myBooks = _myBooks_;
  }));

  it('should do something', function () {
    expect(!!myBooks).toBe(true);
  });

});
