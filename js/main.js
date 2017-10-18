$('img.grid-item').featherlightGallery({
    previousIcon: '«',
    nextIcon: '»',
    galleryFadeIn: 300,
    openSpeed: 300
});

$(window).on('load', function() {
  $(".ba").twentytwenty();
});

$( document ).ready(function() {
	for (var i = $(".color-bg").length - 1; i >= 0; i--) {
		$(".color-bg").eq(i).addClass("color-bg-" + i).removeClass("color-bg");
	}

	var $grid = $('.grid').masonry({
	  itemSelector: '.grid-item',
	  columnWidth: 200,
	  gutter: 10
	});

	$grid.imagesLoaded().progress( function() {
	  $grid.masonry('layout');
	});
});
