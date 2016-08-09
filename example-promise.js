// function getTempCallback(location, callback) {
//   setTimeout(function() {
//     callback(undefined, 78);
//     callback('City not found');
//   }, 1000);
//   // We called both success and error.
// };
//
// // Function will execute both success and error .... not good
// getTempCallback('New Delhi', function(err, temp) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log('Success', temp);
//   }
// });
//
// // We introduced Promise
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found');
//     }, 2000);
//     // Call both success and error from a function
//   });
// };
//
// // Promise will only return first call (success or error)
// getTempPromise('New Delhi').then(function(temp) {
//   console.log('Promise Success', temp);
// }, function(err){
//   console.log('Promise Error', err);
// });
function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (isNaN(a) || isNaN(b)) {
        reject('We must enter numbers for addition, please !!');
      }
      else {
        resolve(a + b);
      }
    }, 500);
  });
}

addPromise(1, 20).then(function(sum){
  console.log('Sum of numbers is: ' + sum);
}, function(err) {
  console.log('ERROR!! ' + err);
});

// Try with (5, 'someString')
