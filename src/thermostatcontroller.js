$( document ).ready(function(){
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temp +'oC!! ' + 'ARE YOU CRAZY FOOL??!!');

function updateTemperature(){
  $('#temperature').text('Temperature has been updated to: ' + thermostat.temp +' DEGREES!! ')
}
  $('#up').on( 'click', function(){
    thermostat.up(1);
    updateTemperature();
  });

  $('#down').on( 'click', function(){
    thermostat.down(1);
    updateTemperature();
  });

  // $( "input" ).click(function( event ) {
  //   alert("Welcome to the world of heat");
  // });
  //
  // $( '#up').click(function(){
  //   alert("turning it up")
  // });

});
