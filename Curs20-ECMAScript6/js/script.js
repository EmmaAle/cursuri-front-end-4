// variable hoisting
var isValid = true;
var isValid2 =true;
//validate('');


function validate(inputString){
  console.log(isValid);
  console.log(error);
  if(inputString.lenght === 0){
    isValid = false;
    var error = true;
    console.log('String is not valid');
    cosole.log(isValid);
    console.log(error);
  }
}


console.log('from global scope');
console.log(isValid);
//console.log(error);


function validate(inputString){
  console.log(isValid2);
  console.log(error);
  if(inputString.length === 0);
  //const error = true;
  isValid2 = false;
  console.log('String is not valid');
    cosole.log(isValid2);
    console.log(error);
}
console.log('from global scope');
console.log(isValid2);

const validate = (inputString) => {
  console.log(isValid2);
  if(inputString.length === 0);
  //const error = true;
  isValid2 = false;
  console.log('String is not valid');
    cosole.log(isValid2);
    console.log(error);
}
//validate('');

function expire(){
  this.isExpired = false;
  setTimeout(() =>{
    this.isExpired = true;
  }, 4000);
  return this.isExpired;
}
console.log(expire());