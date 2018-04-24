window.onload = onHTMLLoaded;

function onHTMLLoaded(){
  getPosts();
}

function getPosts(){
  $.ajax('https://jsonplaceholder.typicode.com/posts', {
 method: 'GET',
  success: function(response){
    console.log('Get post =', response);
    var html = "";
    for( var i = 0; 1<response.lenght; i++);
     var item = response[i]
     html += "<article>" + 
      "<h2>" + item.title + "</h2>" +
      "<p>" + item.body + "</p>" +
      "<button data-id ='" + item.id + "'> Edit</button><button>Delete</button>"
      "</article>";
  var elPosts = document.getElementById("list-posts");
  elPosts.innerHTML = html;
   }
  });
}
  