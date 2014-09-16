$(document).ready(function() {
	$('#writeSeed').click(function() {
//		console.log($('#seedText').val());
		var seedText = $('#seedText').val();
		
		if(seedText === ''){
			alert('글을 입력해주세요.');
			return;
		}
		
		var url = 'http://210.118.74.119:8080//hackathon/writeSeed.do';
		$.ajax({
			url : url,
			type : 'post',
			data : {id: '1', text: seedText, rate: '3.0'},
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