// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     resolve(29);
//     reject('City not found');
//   });
// }
//
//
// getTempPromise('Negombo').then(function(temp){
//   console.log('promise sucess', temp);
// },function(err){
//   console.log('promise error', err);
// })

function getSumPromise(a, b){
  return new Promise(function(resolve, reject){
    var sum= a+b;
    if(typeof sum=== 'number'){
      resolve(sum);
    }else{
      reject('Not valid');
    }

  });
}

getSumPromise(10,'dulip').then(function(sum){
  console.log('success', sum);
},function(err){
  console.log('error', err);
})
