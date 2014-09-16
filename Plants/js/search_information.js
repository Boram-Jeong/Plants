$(document).ready(function() {
	
	var parameters = location.search.split('?')[1];
	var parameter = parameters.split('&');
	console.log(parameter);
	
	var id = parameter[0].split('=')[1];
	var name = decodeURI(parameter[1].split('=')[1]);
	var address = decodeURI(parameter[5].split('=')[1]);
	var rate = parameter[6].split('=')[1];
	
	$('#cafe_information').append(name+'<br>');
	$('#cafe_information').append(address+'<br>');
	$('#cafe_information').append(rate);
	
	$('#writeSeed').click(function() {
//		console.log($('#seedText').val());
		var seedText = $('#seedText').val();
		
		if(seedText === ''){
			alert('글을 입력해주세요.');
			return;
		}
		
		var url = 'http://210.118.74.119:8080/hackathon/writeSeed.do';
		$.ajax({
			url : url,
			type : 'post',
			data : {id: id, text: seedText, rate: '3.0'},
			dataType : 'json',
			success : function(result) {
				if(result===200){
					alert("시드 남기기에 성공했습니다.");
				}
			},
			error : function(e) {
				console.log(e.responseText);
			}
		});
	});
});