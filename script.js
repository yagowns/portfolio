$(document).ready(function(){
	$(".left").mouseover(function() {
		$(".right").css("width", "10vw");
		$(".left").css("width", "90vw");
	});
	$(".left").mouseout(function() {
		$(".right").css("width", "50vw");
		$(".left").css("width", "50vw");
	});
	$(".right").mouseover(function() {
		$(".left").css("width", "10vw");
		$(".right").css("width", "90vw");
	});
	$(".right").mouseout(function() {
		$(".left").css("width", "50vw");
		$(".right").css("width", "50vw");
	});
});