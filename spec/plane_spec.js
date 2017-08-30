describe("Plane", function() {
  var plane1;

  beforeEach(function() {
    plane1 = new Plane();
  });


  it("should return true if working", function() {
    expect(plane1.isworking();).toBe(true);
  });
