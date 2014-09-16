$(document).ready(function(){
	$('#save_favorite').click(function() {
		var favorite1 = $('#favorite1').val();
		var favorite2 = $('#favorite2').val();
		var favorite3 = $('#favorite3').val();
		var favorite4 = $('#favorite4').val();
		localStorage.setItem("favorite1", favorite1);
		localStorage.setItem("favorite2", favorite2);
		localStorage.setItem("favorite3", favorite3);
		localStorage.setItem("favorite4", favorite4);
		
	});

});