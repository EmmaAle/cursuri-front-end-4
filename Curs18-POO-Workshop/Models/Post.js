function Post() {
  this.id = null
  this.title = ""
  this.body = ""
  this.userId = null
}
Post.prototype.fetchData = function(id){
  var that = this
  return $.ajax('https://jsonplaceholder.typicode.com/posts/1' + id,{
    method: 'GET',
    success: function(data){
      this.id = data.id;
      this.title = data.title;
      this.body = data.body;
      this.userId = data.userId;
  },
    error: function() {
    alert('Something went wrong')
  }
});
}