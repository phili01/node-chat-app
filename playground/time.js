var moment = require('moment');

// var date = moment();
// date.add(1, "year").subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY '));


var someTimeStamp = moment().valueOf();
console.log(someTimeStamp);

var createAt = 1235554;
var date = moment(createAt);
console.log(date.format('h:mm a'));