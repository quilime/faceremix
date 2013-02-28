$(document).ready(function(){
	var face_lis = $("#faces li");
	$.each(face_lis, function(i, v){
		$(v).mouseover(function(){
			$("#faces li a").css({
				"background-image" : "url('images/" + v.className + ".jpg')",
				"background-attachment" : "fixed",
				"background-repeat" : "none"
			});
		});
		$(v).mouseout(function(){
			$("#faces li a").css({
				"background" : "inherit"
			});
		});				
	});	
});	
