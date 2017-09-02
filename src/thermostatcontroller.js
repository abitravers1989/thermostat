$( document ).ready(function(){
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temp +'oC!! ' + 'ARE YOU CRAZY FOOL??!!');

function updateTemperature(){
  $('#temperature').text('Temperature has been updated to: ' + thermostat.temp +' DEGREES!! ')
  $('#temperature').attr('class', thermostat.usage)
}
  $('#up').on( 'click', function(){
    thermostat.up(1);
    updateTemperature();
  });

  $('#down').on( 'click', function(){
    thermostat.down(1);
    updateTemperature();
  });

  $('#reset').on( 'click', function(){
    thermostat.reset();
    updateTemperature();
  });

  $('#checkUse').on( 'click', function(){
    thermostat.usage();
  });

  $('#powersaving-off').on( 'click', function(){
    powersavingButton();
    $('#powersave').text('Power Saving mode off');
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
