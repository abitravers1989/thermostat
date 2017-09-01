'use strict';

var Thermostat = function(){
  this.temp = 20;
  this.powersaving = true
}

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temp;
};

Thermostat.prototype.up = function(i) {
  if(this.temp > 25 ) {
    throw new Error("Too Hot");
  }else {
    (this.temp += i);
  }
};

Thermostat.prototype.down = function(i) {
  if(this.temp < 10 ) {
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




ther = new Thermostat
ther.down(25);
ther.temp
