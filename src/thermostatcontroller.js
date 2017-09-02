$( document ).ready(function(){
  var thermostat = new Thermostat();
  $('#temperature').text (thermostat.temp +'oC!! ' + 'ARE YOU CRAZY FOOL??!!');

  $( "input" ).click(function( event ) {
    alert("Welcome to the world of heat");
  });

  $( '#up').click(function(){
    alert("turning it up")
  });

});
