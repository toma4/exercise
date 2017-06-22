/*
We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.
*/

const monkeyTrouble = function(aSmile, bSmile) {

};


console.assert(monkeyTrouble(true, true) === true); 
console.assert(monkeyTrouble(false, false) === true); 
console.assert(monkeyTrouble(true, false) === false);  
console.assert(monkeyTrouble(false, true) === false);  
