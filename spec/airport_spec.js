describe("Airport", function() {
  var airport;
  var plane1;

  beforeEach(function() {
    airport = new Airport();
    plane1 = new Plane();
  });

  it("it has no planes as a default", function(){
    expect(airport.planes()).toEqual([]);
  });
});
