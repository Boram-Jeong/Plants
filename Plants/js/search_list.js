$(document).ready(function() {
	console.log('onload');

	var keyword = location.search.split('keyword=')[1];
	
	var url = 'http://210.118.74.119:8080//hackathon/getSearchList.do?keyword='+keyword;
	$.ajax({
		url : url,
		type : 'get',
		dataType : 'json',
		success : function(result) {
			 for(var idx=0; idx<result.length; idx++) {
				 $('#searchList').append('<li class=\"list-group-item\">'+result[idx].name+'</li>');
			 }
		},
		error : function(e) {
			console.log(e.responseText);
		}
	});
});
