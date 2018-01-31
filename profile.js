var images = ["images/BarnesNoble.jpg", "images/disneyphotopass.jpg", "images/Sycammore.png", "images/morganstanley.jpg", "images/iowacity.jpg", "images/nashville.jpg", "images/research_skills_jigsaw.jpg", "images/microsoft.jpg",];
var showImage;
var count=0;
//slideshow of companies I've worked for (images)
$("#start").click(startSlideshow);
$("#stop").click(stopSlideshow);
function displayImage() {
    $("#image-holder").html("<img src=" + images[count] + " width='400px'>");
}
function nextImage(){
    count++;

    $("#image-holder").html("<img src = 'images/loading.gif' width = '200px'/>");
    setTimeout(displayImage, 1000);

    if (count === images.length){
        count = 0;
    }
}

function startSlideshow(){
    showImage= setInterval(nextImage, 3000);
}
function stopSlideshow(){
    clearInterval(showImage);
}
displayImage();