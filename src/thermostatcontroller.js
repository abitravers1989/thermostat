$( document ).ready(function(){
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temp +'oC!! ' + 'ARE YOU CRAZY FOOL??!!');

  $('#up').on( 'click', function(){
    thermostat.up(1);
    $('#temperature').text('Temperature has been updated to: ' + thermostat.temp +' DEGREES!! ')
  })

  // $( "input" ).click(function( event ) {
  //   alert("Welcome to the world of heat");
  // });
  //
  // $( '#up').click(function(){
  //   alert("turning it up")
  // });

});
