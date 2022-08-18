var images = document.querySelectorAll('.image img');
var prev = document.querySelector('.control.prev');
var next = document.querySelector('.control.next');
var close = document.querySelector('.close');
var galleryImg = document.querySelector('.gallery_inner img');
var gallery = document.querySelector('.gallery');

let currentIndex= 0;



images.forEach((item, index) => {
    item.addEventListener('click', function(){
        currentIndex = index;
        showGallery()
    })
})


function showGallery() {
    if(currentIndex == 0){
        prev.classList.add('hide')
    }else{
        prev.classList.remove('hide')
    }
    if(currentIndex == images.length-1){
        next.classList.add('hide')
    }else{
        next.classList.remove('hide')
    }

    
    gallery.classList.add("show");
    galleryImg.src = images[currentIndex].src;
  }

close.addEventListener('click', function(){
    gallery.classList.remove('show')
})

document.addEventListener('keydown', function(e){
    if(e.keyCode == 27 || e.keyCode ==  32 ){
        gallery.classList.remove('show')
    }
})

document.addEventListener('keydown',function(e){
    if (e.keyCode == '37' && currentIndex >0) { //LEFT
        currentIndex--;
        showGallery();
        showhidegallery();
      } else if (e.keyCode == '39' && currentIndex<7) { //RIGHT
        currentIndex++;
        showGallery();
        showhidegallery();
      }
})



next.addEventListener("click", function(){
    if(currentIndex < images.length-1 ){
        currentIndex++
        showGallery()

    }
})
prev.addEventListener("click", function(){
    if(currentIndex > 0 ){
        currentIndex--
        showGallery()

    }
})
