function gallery(){
    document.getElementById('galleryImage').src='/images/gallery/gallery' + Math.floor(Math.random() * 10 + 1) + '.jpeg'
}


function price(){
    document.getElementById('price').innerHTML='Price: $' + Math.floor(Math.random() * 10 + 10);
   
}