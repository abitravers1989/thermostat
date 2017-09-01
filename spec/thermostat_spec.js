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
    expect(function(){
      thermostat.down(30);
    }).toThrowError("Too cold");
  });

  it("max temp is 25 degrees", function(){
    thermostat.up(30);
    expect(function(){
      thermostat.up(5);
    }).toThrowError("Too Hot");
  });

  it("turns power mode on and off", function(){
    expect(thermostat.powersaving).toEqual(true)
    thermostat.powersavingButton();
    expect(thermostat.powersaving).toEqual(false)
  })

});
