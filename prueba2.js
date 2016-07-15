function accessJson(){
	$.ajax({
		url:"http://paleobiodb.org/data1.1/intervals/list.json?scale=1",
		success: prueba,
		error: function(){
			console.log("Errooorrr!");
		},
		dataType: 'json'
	});
}

function prueba(data) {
var allJson= data.records
	for (var i=0; i<allJson.length; i++) {
		var singleObject = allJson[i];
		console.log(singleObject);
	}
}