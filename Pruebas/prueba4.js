var dataObject;

$(".levels").click(function accessJson(){
	$.ajax({
		url:"http://paleobiodb.org/data1.1/intervals/list.json?scale=1",
		success: prueba,
		error: function(){
			console.log("Errooorrr!");
		},
		dataType: 'json'
	});
});

/*function prueba(data) {
	for (var i=0; i<data.records.length; i++) {
		var singleObject = data.records[i];
		//console.log(singleObject);
		for (var key in singleObject){		
		}
	}
}*/

function prueba(data) {
	dataObject = data.records;
	
	
		
		if ($(this).text() === dataObject.nam){
			var lvloid = dataObject.oid;
			console.log(lvloid);
		}		

		if(dataObject.pid === lvloid){
			var button = "<div class=\"col s6\"><button class=\"levels btn-flat\" style=\"background-color:"+dataObject.col+"; color:white;\">"+dataObject.nam+"</button></div>";
			$(".conti").append(button);
		}
	

};

