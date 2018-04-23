$.ajax('https://jsonplaceholder.typicode.com/posts/3', {
 method: 'GET',
  success: function(response){
    console.log('Get post =', response);
    console.log('Title =', response.title);
    console.log('Body =', response.body);
  }
});
// Parcurgerea unui POST -> Array
$.ajax('https://jsonplaceholder.typicode.com/posts', {
 method: 'GET',
  success: function(response){
    console.log('Get post =', response);
    for( var i = 0; 1<response.lenght; i++);
    var item = response[i]
    console.log('Title =', item.title)
    console.log('Body =', item.body)
 }
});
// Create new POST -> POST
$.ajax('https://jsonplaceholder.typicode.com/posts', {
 method: 'POST',
 data: {
   userId: 1,
   title:'New post',
   body: 'New post body' 
 },
 success: function(response){
   console.log('Create post =', response.post)
 }
});
// Update post -> PUT
$.ajax('https://jsonplaceholder.typicode.com/posts/1', {
 method: 'PUT',
 data: {
   userId: 1,
   title:'Update post 1',
   body: 'Update post body 1' 
 },
 success: function(response){
   console.log('Create post =', response.post)
 }
});
// Deleting post -> DELETE
$.ajax('https://jsonplaceholder.typicode.com/posts/1', {
 method: 'DELETE',
 success: function(response){
   console.log('Delete post =', response.post)
 }
});

$.ajax('https://jsonplaceholder.typicode.com/posts/1/comments', {
 method: 'GET',
 success: function(response){
   console.log('Get comments =', response.comments)
 }
});
// Post with error -> POST
$.ajax('https://jsonplaceholder.typicode.com/posts/1', {
 method: 'POST',
 data: {
   userId: 1,
   title:'New post ',
   body: 'New post body' 
 },
 success: function(response){
   console.log('Create post =', response.post)
 },
error: function(){
  alert('Create post with error')
}
});