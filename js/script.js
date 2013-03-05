
$(document).ready(function() {


	$('#heading a').click(function() {
		$("#faces li a").css({
			"background" : "inherit"
		});
	});


	var face_lis = $("#faces li");
	$.each(face_lis, function(i, v) {
		var link = $(v).find('a');
		$(link).click(function(e) {
			$("#faces li a").css({
				"background-image" : "url('images/" + v.className + ".jpg')",
				"background-attachment" : "fixed",
				"background-repeat" : "none"
			});
			return false;
		});
	});	

});	
