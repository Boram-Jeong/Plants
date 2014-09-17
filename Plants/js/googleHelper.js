
function initialize() {
	var myLatlng = new google.maps.LatLng(37.508952, 127.061016);
	
    var mapOptions = {
      center: myLatlng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        mapOptions);
    
    
    //jQuery request ( coords, 4개 상호검색명)
    var searchList;
    var url = 'http://210.118.74.119:8080/hackathon/getCategoryList.do?category=ALL'
    	+ '&lat=37.508952,&lng=127.061016';
    
	$.ajax({
		url : url,
		type : 'get',
		dataType : 'json',
		success : function(result) {
			searchList = result;
		},
		error : function(e) {
			console.log(e.responseText);
		}
	});
    
    
    
    make_marker(myLatlng, map, "My Space!", 0);
    
    
    //시간차로 마커 떨구기 소스
    for (var i =0; i < searchList.length; i++) {
    	setTimeout(function() {
    		var latlng = new google.maps.LatLng(searchList[i].lat, searchList[i].lng);
    		var name = searchList[i].name;
    		make_marker(myLatlng, map, name, 0);
    	}, i * 200);
    }

}



// color : red(0), blue(1), green(2)
function make_marker(_latlng, _map, _title, _color)
{
	var marker = new google.maps.Marker({
        position: _latlng,
        map: _map,
        title:_title
    });

    make_maker_content(marker, _map);
}


function make_maker_content(_marker, _map){
	google.maps.event.addListener(_marker, 'click', function(event) {
	    var lat = event.latLng.lat();
	    var lng = event.latLng.lng();
	    
	    
	    var contentString = '<div id="content" style="width:150px; height:100px">'+
	      '<div id="siteNotice">'+
	      '</div>'+
	      '<font size="3sp" style="font-familly:맑은고딕">'+
	      '<span id="firstHeading" >제목</span></font>'+
	      '<div id="bodyContent">'+
	      '<p>내용내용내용내용내용내용</p>'+
	      '</div>'+
	      '<div id="btnContent">'+
	      '<button id="btnDetail">detail</button>'+
	      '</div>'+
	      '</div>';

		  var infowindow = new google.maps.InfoWindow({
		      content: contentString
		  });
		  
		  infowindow.open(_map,_marker);
	});
}