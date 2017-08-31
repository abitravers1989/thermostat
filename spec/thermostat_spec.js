describe("Thermostat", function(){

  var thermostat

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("has a starting temperature of 20 degrees", function(){
    expect(thermostat.starttemp()).toEqual(20);
  });
});
