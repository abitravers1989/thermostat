'use strict';

describe("Plane", function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearforLanding']);
  });

  it("should return true if working", function() {
    var plan = plane.isworking();
    expect(plan).toEqual(true);
  });

  it("should land in an airport", function(){
    plane.land(airport);
    expect(plane.clearforLanding).toHaveBeenCalledWith(plane);
  });
});
