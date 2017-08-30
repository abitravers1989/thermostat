// 'use strict';

describe("Plane", function() {
  var plane1;

  beforeEach(function() {
    plane1 = new Plane();
  });


  it("should return true if working", function() {
    plan = plane1.isworking();
    expect(plan).toEqual(true);
  });

});
