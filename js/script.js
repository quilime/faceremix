$(document).ready(function(){
	$.each($("#faces li a"), function(i, v){
		$(v).mouseover(function(){
			$("#faces li").css({
				"background-image" : "url('images/" + v.parentNode.className + ".jpg')",
				"background-attachment" : "fixed",
				"background-repeat" : "none"
			});
		});
		$(v).mouseout(function(){
			$.each($("#faces li"), function(i, v){
				$(v).css({
					"background-image" : "url('images/" + v.className + ".jpg')",
					"background-attachment" : "fixed",
					"background-repeat" : "none"
				});
			
			});
			
		});				
	});	
});	
