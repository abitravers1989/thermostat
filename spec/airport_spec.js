describe("Airport", function() {
  var airport;
  var plane1;

  beforeEach(function() {
    airport = new Airport();
    plane1 = new Plane();
  });


it("a plane can land in the airport", function(){
  airport.landing(plane1);
  expect(airport.planes).to include(plane1);
  //landing
});

  //
  // it("should be able to play a Song", function() {
  //   player.play(song);
  //   expect(player.currentlyPlayingSong).toEqual(song);
  //
  //   //demonstrates use of custom matcher
  //   expect(player).toBePlaying(song);
  // });
