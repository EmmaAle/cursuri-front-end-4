function CommentsList() {
  this.items = [];
}

CommentsList.prototype.fetchData = function() {
  var that = this;
  // trebuie facut sa primesti pe parametrul functiei id-ul postului pentru care ceri comentariile de la server
  // altfel o sa iei mereu comentariile pentru post-ul cu id: 1
  return $.ajax('https://jsonplaceholder.typicode.com/posts/1/comments', {
    method: 'GET',
    success: function(commentsData) {
      for(var i=0; i<commentsData.length; i++) {
        // numele de variabile de obicei sunt crise cu camelCase
        var commentItem = commentsData[i];
        var commnentModel = new Comment();
        commnentModel.name = commentItem.name;
        commnentModel.email = commentItem.email;
  
        that.items.push(commentModel);
      }
    },
    error: function() {
      alert('Something went wrong when fetching comments');
    }
   });
}