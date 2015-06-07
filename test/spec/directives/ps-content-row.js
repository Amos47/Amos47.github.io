'use strict';

describe('Directive: psContentRow', function () {

  // load the directive's module
  beforeEach(module('psApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ps-content-row></ps-content-row>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the psContentRow directive');
  }));
});
