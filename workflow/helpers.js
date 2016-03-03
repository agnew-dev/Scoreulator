$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

$("#refresh").click(function(){
  $('score-list').remove();
  $('#sidebar').append("<score-list></score-list>")
});
