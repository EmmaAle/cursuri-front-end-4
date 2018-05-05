var myRequest = new XMLHttpRequest();
myRequest.open("GET" , "https://dog.ceo/api/breeds/image/random");
myRequest.onload = function() {
  console.log(myRequest.responseText)
};
myRequest.send();