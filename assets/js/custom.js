$(document).ready(function(){
  
    $('.first-screen-slider').slick({
        dots:true,
        infinity:true,
        appendArrows: '.first-screen-slider__arrows',
        responsive: [{
            
              breakpoint: 991,
              settings: {
                arrows:false,
              }
            },
          ]
        });

        
});

 const checkbox = document.querySelectorAll('[type=checkbox]')

 checkbox.forEach(item => {
  item.closest('.input-box').classList.add ('has-checkbox')
  item.closest('.input-column').classList.add('padding')
})
