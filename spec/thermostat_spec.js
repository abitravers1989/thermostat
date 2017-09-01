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

  it("throws an error message if min temperature is reached", function(){
    thermostat.down(30);
    expect(thermostat.temp).toThrow("Too cold");
  });

  it("when power saving mode is on the max temp is 25 degrees", function(){
    thermostat.powersave();
    thermostat.temp  
  });
});
