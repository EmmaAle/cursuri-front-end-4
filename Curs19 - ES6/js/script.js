console.log('log 1');

var veryImportantPromise = new Promise(function(resolve,reject){
 setTimeout(function(){
  console.log('log from setTimeout');
  resolve();
}, 10000); 
});

veryImportantPromise.then(function(){
  console.log('log from the function');
}).catch(function(){
  console.log('log from catch function');
});

var onClickPromise = new Promise(function(resolve,reject){
  document.getElementById('submit').addEventListener('click', function(){
    resolve();
  
});
  document.getElementById('cancel').addEventListener('click', function(){
    reject();
 });
});

onClickPromise.then(function(){
  console.log('Go cookies!');
}).catch(function(){
  console.log('No cookies for you!');
});