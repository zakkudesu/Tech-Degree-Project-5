
//initialize magnific popup
$('.flex-container').magnificPopup({
    delegate: 'a', 
    type: 'image',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
      },
    showCloseBtn: false,  
  }); 

  

// search filter


$(document).ready(function(){
  $(".search-field").on("keyup", function() {

  let findPhoto = document.getElementById('searchInput').value.toLowerCase();
  let photo = document.querySelectorAll('.flex-item');
   
    for (let i = 0; i < photo.length ; i++) {
        let link = document.getElementsByTagName('a');
              
    for (let i = 0; i < link.length; i++) {
         let linkSearch = link[i].getAttribute('title');

    if(linkSearch.toLowerCase().indexOf(findPhoto) > -1){
            photo[i].style.display= 'block';
       } else {
            photo[i].style.display = 'none';
        }
      }
    }
  });
}); 
