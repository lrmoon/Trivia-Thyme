import $ from 'jquery';

$(".drop").click(function() {
	$(".stem").addClass("rain");
	
	setTimeout(function () { 
		$('.stem').removeClass('rain');
	}, 22200);  
});