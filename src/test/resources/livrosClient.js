$(function(){
	$(".js-load-books").on('click',function(){
		$.ajax(
				url: "http://localhost:8080/livros",
				type: "get",
				headers: {
					"Authorization" : "Basic cmVuYW46czNuaDQ="
				},
				success: function(response){
					alert(response)
				}
		);
	})
});