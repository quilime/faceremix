
var students = [];

	var s = [];

$(document).ready(function() {





	// reset
	$('#heading a').click(function() {

		$("#faces li a").css({
			"background" : "inherit"
		});

		$('#profile').empty();

	});



	// randomize
	$('#shuffle').click(function() {
		console.log('yeah');
	});





	// assign events
	$.each($("#faces li"), function(i, v) {

		s.push(v.className);
		
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
