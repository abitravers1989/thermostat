'use strict';

var Thermostat = function(){
  this.temp = 20;
}

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temp;
};

Thermostat.prototype.up = function(i) {
   console.log(this.temp += i);
};

Thermostat.prototype.down = function(i) {
  if(this.temp < 10 ) {
    throw ("Too cold");
  }else {
    this.temp -= i
  }
};


ther = new Thermostat
ther.down(25);
ther.temp
