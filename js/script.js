
$(document).ready(function() {

	// reset
	$('#heading a').click(function() {

		$("#faces li a").css({
			"background" : "inherit"
		});

		$('#profile').empty();

	});


	var face_lis = $("#faces li");
	$.each(face_lis, function(i, v) {
		
		var link = $(v).find('a');

		$(link).click(function(e) {

			var json_file = "data/" + v.className + ".json";

			$.getJSON( json_file, function(data) {
				$('#profile').html( 
					'<h2>' + data.name + '</h2>' +
					'<p><a href="' + data.pathbrite + '">pathbrite portfolio</a></p>'
				 );
			});


			$("#faces li a").css({
				"background-image" : "url('images/" + v.className + ".jpg')",
				"background-attachment" : "fixed",
				"background-repeat" : "none"
			});

			return false;
		});
	});	

});	
