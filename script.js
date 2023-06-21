// Add event listeners to each album item
var albums = document.getElementsByClassName("album");
for (var i = 0; i < albums.length; i++) {
  albums[i].addEventListener("click", showImage);
}

// Event handler for displaying the clicked image
function showImage() {
  var imageSrc = this.getElementsByTagName("img")[0].src;
  var imageAlt = this.getElementsByTagName("img")[0].alt;
  
  // Display the image in a modal or any other desired way
  // You can use a library like Bootstrap or create your own modal
  console.log("Image source:", imageSrc);
  console.log("Image alt:", imageAlt);
}