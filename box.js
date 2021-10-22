
for(let i=0; i<16; i++) {
$('.boxes').append(`<div class="box"></div>`); // For loop that loops 16 times, appending, creating 16 divs
}

$('.boxes').on('click', '.box', function() {
  $(this).toggleClass('lightBox');
})

