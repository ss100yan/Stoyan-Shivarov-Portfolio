// Get the modal
var modal = document.getElementById('myModal');

$(".img-design").on("click", function(event){
  var modalImg = "img/designs/" + event.target.id + ".jpg";
  
  $("#designImg").attr("src", modalImg);

  $(".modal").modal();
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}