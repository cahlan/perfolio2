$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
	$(".fancybox")
    .attr('rel', 'gallery')
    .fancybox({
        padding : 0
    });
});