$(document).ready(function(){
	$('#search').click(function() {
		var keyword = $('#searchKeyword').val();
		window.location.href = "./view/search_list.html?keyword=" + keyword;
	});
	
	var map;
	function initialize() {
	  var mapOptions = {
	    zoom: 8,
	    center: new google.maps.LatLng(-34.397, 150.644)
	  };
	  map = new google.maps.Map(document.getElementById('map-canvas'),
	      mapOptions);
	}

	google.maps.event.addDomListener(window, 'load', initialize);
});
