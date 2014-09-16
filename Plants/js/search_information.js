function loadSeeds(id) {
	console.log('test');
	$('#review_contents').children().remove();

	var url = 'http://210.118.74.119:8080/hackathon/getSeedList.do?id=' + id;

	$.ajax({
		url : url,
		type : 'get',
		dataType : 'json',
		success : function(result) {
			console.log(result);
			for ( var idx = 0; idx < result.length; idx++) {
				$('#review_contents').append(
						'<a href="#" class="list-group-item">'
								+ result[idx].text + '<span class="badge">'
								+ result[idx].rate + '</span></a>');
			}
		},
		error : function(e) {
			console.log(e.responseText);
		}
	});
}

$(document).ready(function() {

	var parameters = location.search.split('?')[1];
	var parameter = parameters.split('&');
	console.log(parameter);

	var id = parameter[0].split('=')[1];
	var name = decodeURI(parameter[1].split('=')[1]);
	var address = decodeURI(parameter[5].split('=')[1]);
	var rate = parameter[6].split('=')[1];

	$('#cafe_information').append(name + '<br>');
	$('#cafe_information').append(address + '<br>');
	$('#cafe_information').append(rate);

	loadSeeds(id);

	$('#writeSeed').click(function() {
		// console.log($('#seedText').val());
		var seedText = $('#seedText').val();

		if (seedText === '') {
			alert('글을 입력해주세요.');
			return;
		}

		var url = 'http://210.118.74.119:8080/hackathon/writeSeed.do';
		$.ajax({
			url : url,
			type : 'post',
			data : {
				id : id,
				text : seedText,
				rate : '3.0'
			},
			dataType : 'json',
			success : function(result) {
				if (result === 200) {
					alert("시드 남기기에 성공했습니다.");
					$('#seedText').val('');
					loadSeeds(id);
				}
			},
			error : function(e) {
				console.log(e.responseText);
			}
		});
	});
});
