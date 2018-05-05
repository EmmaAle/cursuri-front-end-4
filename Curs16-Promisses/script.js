window.onload = onHtmlLoaded;
function onHtmlLoaded(){
  getPosts()
}

function getPosts(){
   $.ajax('https://jsonplaceholder.typicode.com/posts', {
      succes: function(response) {
        console.log('List =', response)
       
        for(var i = 0; i<response; i++){
          var post =response[i];
          $.ajax('https://jsonplaceholder.typicode.com/posts/' + post.id +'/comments', {
            success: function (comments) {
             console.log('COMMENTS =', comments)
          }
        });
      }
   
   }
  });
}