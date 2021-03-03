class Airport{
    constructor(airplanes) {
        this.airplanes = airplanes;
     };

     airplaneLand(airplane) {
         this.airplanes.push(airplane);

     };
    
     airplaneTakeOff(airplane) {
         const planeIndex = this.airplanes.indexOf(airplane);
         this.airplanes.splice(planeIndex, 1);
     };
     
}
class Airplane{
    constructor(carrier, flightNumber, color = "white") {
        this.carrier = carrier;
        this.flightNumber = flightNumber;
        this.color = color;
     }
}
   const airplane1 = new Airplane("BA", 227);
   const airplane2 = new Airplane("United", 666);
   const airport = new Airport([airplane1, airplane2]);
   const airplane3 = new Airplane("WOW", 330);
   console.log(airport.airplanes);
   airport.airplaneTakeOff(airplane2);
   console.log(airport.airplanes);
