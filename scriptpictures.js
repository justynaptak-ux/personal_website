$(document).ready(function () {
  $('#gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Justyna Ptak</small>';
			}
		}
	});
  $(".circle").each( function() {
    $(this).height($(this).width())
  });
  $(window).resize(function(){
    $(".circle").each( function() {
      $(this).height($(this).width())
    });
  });
});
