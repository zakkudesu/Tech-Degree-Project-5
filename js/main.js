
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

  

let search = document.getElementByID(searchInput);

search.addEventListener('keyup', photoFilter);

function photoFilter(){

  let findPhoto = document.getElementById('searchInput');
  let photo = document.querySelectorAll('.flex-item');

       
    for (let i = 0; i < photo.length ; i++) {
        let link = document.getElementsByTagName('a');
              
    for (let i = 0; i < link.length; i++) {
         let linkSearch = link[i].getAttribute('title');

    if(linkSearch.toLowerCase().indexOf(search) > -1){
            photo[i].style.display= 'block';
       } else {
            photo[i].style.display = 'none';
        }
      }
    }
  }

  // photoFilter();

  // // search filter test in jQuery
  // $(document).ready(function(){
  //   $(".search-field").on("keyup", function() {
  //     let photoSearch = $(this).val().toLowerCase();
      
  //      console.log(photoSearch);

  //      $('a').each(function(index){     
  //       console.log($(this));           
  //       });
        
  //   });
  // });

