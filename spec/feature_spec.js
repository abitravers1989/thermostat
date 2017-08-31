'use strict';

describe("Feature Test:", function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  })

  it("instructs a plane to land at an airport and confirms it's landed", function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
});
