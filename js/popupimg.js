// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $('.myImg');
var modalImg = $("#img01");
var modalVid = $("#vid01");
// var captionText = document.getElementById("caption");
$('.myImg').click(function(){
    modal.style.display = "block";
    var newSrc = this.src;
    modalVid.attr('width', 20);
    modalVid.attr('height', 20);
    modalImg.attr('src', newSrc);
});

$('.myVid').click(function(){
    modal.style.display = "block";
    var newSrc = this.value;
    console.log(newSrc);
    modalVid.attr('width', 640);
    modalVid.attr('height', 480);
    modalVid.attr('src', newSrc);
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  modalImg.attr('src', "");
  modalVid.attr('src', "");
}