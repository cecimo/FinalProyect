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

/*function prueba(data) {
	for (var i=0; i<data.records.length; i++) {
		var singleObject = data.records[i];
		//console.log(singleObject);
		for (var key in singleObject){		
		}
	}
}*/

function prueba(data) {
	
	$.each(data.records, function(index,value){
		
		if (value.lvl===1){
			var button= "<div class=\"col s6\"><button class=\"lvl1 btn-flat\" style=\"background-color:"+value.col+"; color:white;\">"+value.nam+"</button></div>"
			$(".conti").append(button) 
		}

		$(".lvl1").click(function(){
			console.log("hola");
		});
		
	});

}

