$(window).on('load', onHtmlLoaded);

function onHtmlLoaded(){
  console.log('window loaded');
  
  var list = $('#comments-list');
  console.log(list[0]);

  var firstP = $('.comment-item[0]');
  console.log('First paragraph inside comment-item', firstP)

  var h1 = $('h1');
  console.log(h1[0]);
  console.log(h1.text(), h1.html());
  
  h1.text('jQuery DOM Manipulation');
  console.log(h1.text());
  
  h1.html("<em>jQuery</em> DOM Manipulation");
  console.log(h1.html());
}