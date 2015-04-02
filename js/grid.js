var $container = $("#container");
var pageLimit = 405;

$(document).ready(function() {
	for(var i = 1; i <= pageLimit; i++) {
	$("#container").append("<div class='block'></div>");
	}
	$(".block").hover(function() {
		$(this).css("background-color", "#D8D8D8");
	});
	$("#reset").click(function() {
		$(".block").css("background-color", "#B2B2B2");
	});
});
	
	