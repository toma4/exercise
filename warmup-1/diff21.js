/*
Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.

diff21(19) → 2
diff21(10) → 11
diff21(21) → 0
*/

const diff21 = function (n) {
  
};



console.assert(diff21(19) === 2 );
console.assert(diff21(10) === 11);
console.assert(diff21(21) === 0 );  
console.assert(diff21(22) === 2 );
console.assert(diff21(25) === 8 );
console.assert(diff21(30) === 18);
console.assert(diff21(0) === 21 );
console.assert(diff21(1) === 20 );
console.assert(diff21(2) === 19 );
console.assert(diff21(-1) === 22);
console.assert(diff21(-2) === 23);
console.assert(diff21(50) === 58);
