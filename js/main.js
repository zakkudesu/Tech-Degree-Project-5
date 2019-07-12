
//initialize magnific popup
$('.flex-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
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
      let photoSearch = $(this).val().toLowerCase();
      
       console.log(photoSearch);

       
        
    });
  });

