// list of all students, teachers
var members = [
	"amy", 
	"andrew", 
	"angelisa", 
	"bianca", 
	"bradley", 
	"dwana", 
	"gabe", 
	"jon", 
	"karina", 
	"kevin", 
	"koby", 
	"my"
];


// what happens when the page is ready
$(document).ready(function() {

	// reset
	$('#heading a').click(function() {
		// empty the profile element
		$('#profile').empty();
		// generate new faces
		generateFaces();
	});

	// generate faces faces
	generateFaces();
});	

// generate faces function
var generateFaces = function() {
	
	// create a variable for the faces element
	var base_elem = $('#faces');

	// create a variable for the profile element
	var profile_elem = $('#profile')	

	// shuffle faces
	members.sort(function() { return 0.5 - Math.random(); });

	// empty base element
	base_elem.empty();

	// loop through each of the 'members' array
	$(members).each(function(i, v) {
		// create an element that we will fill with content for each face
		var elem = $('<li><a href="#"></a></li>');

		// set all elements to have a unique background image based on the members array
		elem.css({
			"background-image" : "url('images/" + v + ".jpg')",			
		});

		// find the <a> element in the elem, and assign a click event
		elem.find('a').click(function(e){

			// get the associated data json for each of the elements
			$.getJSON( "data/" + v + ".json", function(data) {
				// fill the profile with the appropriate content
				$('#profile').html( 
					'<h2>' + data.name + '</h2>' +
					'<p><a href="' + data.pathbrite + '">pathbrite portfolio</a></p>'
				 );
			});

			// set all the faces 
			$("#faces li a").css({
				"background-image" : "url('images/" + v + ".jpg')",
				"background-attachment" : "fixed",
				"background-repeat" : "none"				
			});
		});

		// append each element to the base element
		base_elem.append(elem);
	});
};



