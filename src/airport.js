//supreme function / variable

var Airport = function(planes){
  this.planesz = planes;
};

Airport.prototype.planesarray = function(){
  planes = new Array(this.planesz);
};

//TypeError: air is not a function
air = new Airport
air("planes")

air = new airport
air("planes")
//TypeError: air is not a function
