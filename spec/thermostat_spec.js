describe("Thermostat", function(){

  var thermostat

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("has a starting temperature of 20 degrees", function(){
    expect(thermostat.temp).toEqual(20);
  });

  it("increases the temperture with the up method", function(){
    thermostat.up(10);
    expect(thermostat.temp).toEqual(30);
  });

  it("increases the temperture with the down method", function(){
    thermostat.down(10);
    expect(thermostat.temp).toEqual(10);
  });
});
