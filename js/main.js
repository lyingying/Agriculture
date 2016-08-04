$('.logout').click(function(event) {
	$.ajax({
		url: './logout.action',
		type: 'POST',
		dataType: 'json',
		success: function (data) {
			if(data.errorCode == "000000"){
				window.location.href = "login.html";
			}else{
				alert('errorCode:'+data.errorCode,'errorMsg:'+data.errorMsg);
			}
		},
		error: function (data) {
			console.error(data);
		}    
	})	
});