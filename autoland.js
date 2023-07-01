function justDoTheThing() {
function runAutoland() {
//Plane list
if (geofs.aircraft.instance.id == 4172 || geofs.aircraft.instance.id == 3591 || geofs.aircraft.instance.id == 3140 || geofs.aircraft.instance.id == 3534 || geofs.aircraft.instance.id == 3460 || geofs.aircraft.instance.id == 3341 || geofs.aircraft.instance.id == 3292 || geofs.aircraft.instance.id == 3180 || geofs.aircraft.instance.id == 3179 || geofs.aircraft.instance.id == 3054 || geofs.aircraft.instance.id == 3011 || geofs.aircraft.instance.id == 2989 || geofs.aircraft.instance.id == 2973 || geofs.aircraft.instance.id == 2953 || geofs.aircraft.instance.id == 2943 || geofs.aircraft.instance.id == 2899 || geofs.aircraft.instance.id == 2879 || geofs.aircraft.instance.id == 2878 || geofs.aircraft.instance.id == 2871 || geofs.aircraft.instance.id == 2870 || geofs.aircraft.instance.id == 2865 || geofs.aircraft.instance.id == 2857 || geofs.aircraft.instance.id == 2856 || geofs.aircraft.instance.id == 2843 || geofs.aircraft.instance.id == 2772 || geofs.aircraft.instance.id == 2769 || geofs.aircraft.instance.id == 2556 || geofs.aircraft.instance.id == 2461 || geofs.aircraft.instance.id == 2395 || geofs.aircraft.instance.id == 2386 || geofs.aircraft.instance.id == 2153 || geofs.aircraft.instance.id == 252 || geofs.aircraft.instance.id == 244 || geofs.aircraft.instance.id == 242 || geofs.aircraft.instance.id == 240 || geofs.aircraft.instance.id == 239 || geofs.aircraft.instance.id == 238 || geofs.aircraft.instance.id == 237 || geofs.aircraft.instance.id == 20 || geofs.aircraft.instance.id == 18 || geofs.aircraft.instance.id == 10 || geofs.aircraft.instance.id == 7 || geofs.aircraft.instance.id == 4 || geofs.aircraft.instance.id == 5) {
//If the aircraft is on an ILS approach and is close to the runway
if (geofs.autopilot.mode == "NAV" && geofs.animation.values.haglFeet <= 250) {
geofs.autopilot.setMode("HDG");
//Keep the plane descending!
geofs.autopilot.setAltitude(1);
geofs.autopilot.setVerticalSpeed(-250);
//If the aircraft is close to sea level and the autopilot doesn't want to abruptly hit its set altitude, we just force the plane to stall onto the runway
setTimeout(() => {
geofs.autopilot.setSpeed(0);
},20000);
//If it was set off by a mountain or somth, we go around
setTimeout(() => {
   if (geofs.animation.values.groundContact == 0) {
controls.setters.setGear.set();
geofs.autopilot.setSpeed(200);
geofs.autopilot.setAltitude(geofs.animation.values.altitude+1000)
   };
},90000);
};
   };
//Once the aircraft hits the ground, the autopilot should disengage to allow tiller control, reverse thrust, etc
if (geofs.autopilot.on == 1 && geofs.animation.values.groundContact == 1) {
geofs.autopilot.turnOff();
   };
};
autolandInterval = setInterval(function(){runAutoland()},100)
}
