var currentPost = new Post();
currentPost.fetchData().then(function(){
var currentPostId = getUrlParameter('postId')
  var postDetailsContainer = document.getElementById('post-details'); 
 
  var postTitleEl = document.getElementById('h1')
  postTitleEl.innerHTML = currentPost.title;
 
  var postBodyEl = document.createElement('p');
  postBodyEl.innerHTML = currentPost.body;
  
  postDetailsContainer.appendChild(postTitleEl);
  postDetailsContainer.appendChild(postBodyEl);
  
}).catch(function(){
  console.log('Something went wrong');
});

//Aici ar trebui creatat un obiect cu ajutorul clasei CommentsList, apelat fetchData pe el si cand au venit datele (commenturile) de la server
// parcursa lista de commenturi si generat HTML astfel incat datele sa ajunga pe UI-ul utilizatorului

/**
     * It retrieves a query (URL) parameter value
     * 
     * It expects you to send the parameter key(before '=')
     * **/
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }