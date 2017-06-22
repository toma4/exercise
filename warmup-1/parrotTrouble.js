/*
We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.

parrotTrouble(true, 6) → true
parrotTrouble(true, 7) → false
parrotTrouble(false, 6) → false
*/

const parrotTrouble = function(talking, hour) {
  
};


console.assert(parrotTrouble(true, 6) ===    true);
console.assert(parrotTrouble(true, 7) ===   false); 
console.assert(parrotTrouble(false, 6) ===  false);  
console.assert(parrotTrouble(true, 21) ===   true); 
console.assert(parrotTrouble(false, 21) === false);
console.assert(parrotTrouble(false, 20) === false);
console.assert(parrotTrouble(true, 23) ===   true); 
console.assert(parrotTrouble(false, 23) === false);
console.assert(parrotTrouble(true, 20) ===  false);  
console.assert(parrotTrouble(false, 12) === false);
