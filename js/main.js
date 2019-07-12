
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
        
       /* Brainstorming
    
       1. let titleContent = [a:title="text"].toLowerCase()

       2. loop through each image titleContent

       3. if photoSearch contains any titleContent {
            .toggle(!titleContent)
       }
       */
    });
  });

