
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
        
    });
  });

      /* Brainstorming Solution
    
       1. let titleContent = document.getElementByTagName("a").querySelectorAll("a[title]")

       2 Create function that  
            loops through titleContent

              jQuery:
                $('a').each(function(index){     
                console.log($(this));           
                });

              JS:
                for (let i = 0; i < a.length ; i ++) {
                  

                }


       and
       
                if photoSearch contains any titleContent {
                .toggle(!titleContent)
                }
       */