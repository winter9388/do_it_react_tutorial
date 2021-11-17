// ES5 예제
var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };

var combined = {
  one: objectOne.one,
  two: objectOne.two,
  three: objectTwo.three,
  four: objectTwo.four,
};
var combined = Object.assign({}, objectOne, objectTwo);
// combined = { one: 1, two: 2, three: 3, four: 4, other: -1}
var combined = Object.assign({}, objectOne, objectTwo);
// combined = { one: 1, two: 2, three: 3, four: 4, other: 0}
var others = Object.assign({}, combined);
console.log(others);
delete others.other;
console.log(others);

// ES6 예제
var combined = {
  ...objectOne,
  ...objectTwo,
};
// combined = { one: 1, two: 2, three: 3, four: 4, other: -1}
var combined = {
  ...objectTwo,
  ...objectOne,
};
// combined = { one: 1, two: 2, three: 3, four: 4, other: 0}
var { other, ...others } = combined;
// others = { one: 1, two: 2, three: 3, four: 4}

console.log(typeof combined);

let abc = { 0: { createdAt: 1637134835159, text: 'test1', id: 'ozZRhKRCDq7fNJ7XwCoZ' } };
console.log(typeof abc);
let test = abc[0].id;
console.log(test);
