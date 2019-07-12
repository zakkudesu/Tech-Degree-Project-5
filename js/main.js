
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

       $('a').each(function(index){     
        console.log($(this));           
        });
        
       /* Brainstorming Solution
    
       1. let titleContent = document.getElementByTagName("A").querySelectorAll("a[title]")

       2. Createa function that  
            loops through each image titleContent
                $('a').each(function(index){     
                console.log($(this));           
                });

       and
       
                if photoSearch contains any titleContent {
                .toggle(!titleContent)
                }
       */
    });
  });
