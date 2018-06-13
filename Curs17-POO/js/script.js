var car = {
  "owner.first.name": "Alexandra",
  color: "red",
  nrKm : "1000",
  isNew : false,
  drive : function(distance){
    this.nrKm = this.nrKm + distance;
    console.log("Driving the car for =" + distance);
    console.log("This car has" + this.nrKm + "after driving");
  }
};
console.log(car);
// accesing object properties
console.log(car.nrKm);
// if the key has weird atributes
console.log(car["owner.first.name"]);
console.log(car["color"]);

//caling the method
car.drive(100);

//declaring classes in js

function Dog(data){
  data = data || {};
  this.name = data.name || "";
  this.age = data.age || "";
  this.breead = data.breed || "";
  this.isFriendly = data.isFriendly || true;
}
Dog.prototype.bark = function(){
  alert("How! Barking like a:" + this.breed);
}


var dog1 = new Dog();
dog1.name = "Arya";
dog1.age = 2;
dog1.breead = "Golden";

dog1.bark();

var dog2 = new Dog();
dog2.name = "Azor";
dog2.age = 4;
dog2.breead = "Beeagle";


var dog3 = new Dog();
dog3.name = "Rex";
dog3.age = 6;
dog3.breead = "Doberman";
dog3.isFriendly = false;

var dog4 = new Dog({
  name: "charlie",
  age: 7,
  brees: "labardor",
})

var dog5Data = {
  name: "Lolly",
  age: 10,
  breed: "Tera Nova",
}
var dog5 = new Dog(dog5Data);

console.log(dog1);
console.log(dog2);
console.log(dog3);
console.log(dog4);
console.log(dog5);

var userData =[{
  name: "John",
  age: 34,
  height: 1.76,
  weight: 80
},{
  name: "Marty",
  age: 22,
  height: 1.65,
  weight: 90,
},{
  name: "Anne",
  age: 44,
  height: 1.73,
  weight: 45,
},{
  name: "Kevin",
  age: 33,
  height: 1.80,
  weight: 77,
}]

function User(){
 this.name = "";
 this.age = 0;
 this.weight = 0;
 this.height = 0;
}

User.prototype.calculateBMI = function(){
  var bmi = this.weight/(this.height*this.height);
  return bmi;
};

for(var i = 0; i< userData.length; i++){
  var currentUser = userData[i];
  // dupa "new" vine numele clasei cu ajutorul careia vrei sa creezi obiectul, in cazul tau clasa "User"
  var u = new User()
  u.name = currentUser.name
  u.height = currentUser.height
  u.weight = currentUser.weight
  u.age = currentUser.age 
 var bmirez = u.calculateBMI();
   if(bmirez < 18.5){
        console.log(u.name +' is underweight');
    } else if(bmirez < 25){
        console.log(u.name +' is normal');
    } else if(bmirez < 30){
        console.log(u.name +' is overweight');
    } else {
        console.log(u.name +' is Obese');
    }
  // aici trebuiesc facute comparatiile pentru bmirez si printat daca user-ul are o greutate normala sau nu
}
