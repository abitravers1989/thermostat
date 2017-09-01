'use strict';

var Thermostat = function(){
  this.temp = 20;
  this.powersaving = true
}

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temp;
};

Thermostat.prototype.up = function(i) {
  if(this.temp + i > 25 && this.powersaving === true) {
    throw new Error("Too Hot");
  } else if (this.temp + i > 32) {
    throw new Error("Fucking turn it down!")
  } else {
    (this.temp += i);
  }
};

Thermostat.prototype.down = function(i) {
  if(this.temp - i < 10 ) {
    throw new Error("Too cold");
  }else {
    (this.temp -= i);
  }
};

Thermostat.prototype.powersavingButton = function() {
  if(this.powersaving === true){
    this.powersaving = false
  } else {
    this.powersaving = true
  }
};

Thermostat.prototype.reset = function() {
  this.temp = 20
};

Thermostat.prototype.usage = function() {
  if(this.temp < 18){
    return "low-usage"
  }
  else if(this.temp > 18 && this.temp < 25){
    return "medium-usage"
  }
  else {
    return "high-usage"
  }
};


ther = new Thermostat
ther.down(25);
ther.temp
