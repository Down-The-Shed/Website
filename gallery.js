window.onload = function(){ 
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.getElementsByClassName("ClickableImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
    var img = images[i];
    // and attach our click listener for this image.
    img.onclick = function(evt) {
      console.log(evt);
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
  }
  
  var span = document.getElementById("close");
  span.onclick = function() {
    modal.style.display = "none";
  }
};