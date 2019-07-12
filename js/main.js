
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
      let photoSearch = $(this).val().toLowerCase();
      
       console.log(photoSearch);

        
    });
  });

