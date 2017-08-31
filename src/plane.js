var Plane = function() {

Plane.prototype.isworking = function(){
  return true
};

this.land = function(airport){
  return true
};

};

// there is a difference between this and prototype as the this
// keyword seems to give the functions of the Plane subclass to the instace

// plan = new Plane
// plan.land();
