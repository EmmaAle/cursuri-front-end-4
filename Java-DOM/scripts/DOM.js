var commentsList = document.getElementById('comments-list');
console.log(commentsList); // null

window.addEventListener("load", onHtmlLoaded);

function onHtmlLoaded() {
  var commentsList = document.getElementById('comments-list');
  console.log(commentsList); // the element...
  
  console.log("comments items", 
             document.getElementsByClassName("comment-item"));
  
  console.log("comments items by tag", 
              document.getElementsByTagName("section"));
  
  var commentItems = document.getElementsByTagName("section");
  console.log("first comment item", commentItems[0]);
  console.log("second comment item", commentItems[1]);
  
  console.log("first paragraph inside section", 
             document.querySelector("section.comment-item > p"));
  
    console.log("all paragraphs inside section", 
             document.querySelectorAll("section.comment-item > p"));

var h1Array = document.getElementsByTagName('h1');
console.log(h1Array[0]); // first element of the array

var h1 = document.querySelector('h1');
console.log(h1); // first elemnt

console.log(h1Array.innerHTML);
console.log(h1Array[0].innerHTML);
console.log(h1.innerHTML);

h1.innerHTML = 'Js DOM Manipulation Modified';

// get & set atributes

var list = document.getElementById('comments-list');
console.log('Element id', list.id);

list.id = 'comments-list-new-id';
list.setAttribute('id', 'comments-list-new');

list.style.border = 'solid 1px red'
list.style.padding = '5px'

// creating element
var comment = document.createElement('section'); 
comment.className = 'comment-item';
var commentClassList = comment.classList;
commentClassList.add('second-comment-item');
comment.innerHTML ='<h2>Manu</h2><p>Comment from Manu</p>';

// adding to the page
list.appendChild(comment);
var AnaComment = document.querySelector('.comment-item');
list.removeChild(AnaComment);

console.log(comment.children);
console.log(comment.querySelector('p'))

//events

var submitButton = document.getElementById('btn-submit');
submitButton.addEventListener('click', handleClick)

}

function handleClick(event) {
	event.preventDefault();
	console.log(event)
 }



