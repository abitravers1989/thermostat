describe("Thermostat", function(){

  var thermostat

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("has a starting temperature of 20 degrees", function(){
    expect(thermostat.temp).toEqual(20);
  });

  it("increases the temperture with the up method", function(){
    thermostat.up(1);
    expect(thermostat.temp).toEqual(21);
  });

  it("increases the temperture with the down method", function(){
    thermostat.down(10);
    expect(thermostat.temp).toEqual(10);
  });

  it("throws an error message if min temperature is reached", function(){
    expect(function(){
      thermostat.down(30);
    }).toThrowError("Too cold");
  });

  it("max temp is 25 degrees", function(){
    expect(function(){
      thermostat.up(35);
    }).toThrowError("Too Hot");
  });

  it("turns power mode on and off", function(){
    expect(thermostat.powersaving).toEqual(true)
    thermostat.powersavingButton();
    expect(thermostat.powersaving).toEqual(false)
  })

  it("max temp is 32 degrees when powersavingbutton is off", function(){
    thermostat.powersavingButton();
    expect(thermostat.powersaving).toEqual(false)
    thermostat.temp = 30
    expect(function(){
      thermostat.up(5);
    }).toThrowError("TURN it down!");
  });

  it("Resets the temperature to 20 with reset button", function(){
     thermostat.reset();
     expect(thermostat.temp).toEqual(20)
  })

  describe("usage tests", function(){
    it("Gives messgae low", function(){
      thermostat.temp = 16
      expect(thermostat.usage()).toEqual("low-usage")
    });
    it("Gives messgae medium", function(){
      thermostat.temp = 24
      expect(thermostat.usage()).toEqual("medium-usage")
    });
    it("Gives messgae high", function(){
      thermostat.temp = 29
      expect(thermostat.usage()).toEqual("high-usage")
    });
  });
});
