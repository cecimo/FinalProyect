var dataObject;

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
	dataObject = data.records;
	var lvl1name;
	var lvl1oid;
	var lvl2name;
	var lvl2oid;
	

	$.each(data.records, function(index,value){
		
		if (value.lvl===1){
			var button= "<div class=\"col s6\"><button class=\"lvl1 btn-flat\" style=\"background-color:"+value.col+"; color:white;\">"+value.nam+"</button></div>";
			$(".conti").append(button); 
		}

		$(".lvl1").click(function(){
			lvl1name = $(this).text();
			if (lvl1name === value.nam){
				lvl1oid = value.oid;
				console.log(lvl1name);
			}		

			if(value.pid === lvl1oid){
				var button2 = "<div class=\"col s6\"><button class=\"lvl2 btn-flat\" style=\"background-color:"+value.col+"; color:white;\">"+value.nam+"</button></div>";
				$(".conti").append(button2);
			}
		});
		
		$(".lvl2").click(function(){
			lvl2name = $(this).text();
			if (lvl2name === value.nam){
				lvl2oid = value.oid;
				console.log(lvl2oid);
			}

			if (value.pid === lvl2oid){
				var button3 = "<div class=\"col s6\"><button class=\"lvl3 btn-flat\" style=\"background-color:"+value.col+"; color:white;\">"+value.nam+"</button></div>";
				$(".conti").append(button3);
			}
		})
	});

}	




accessJson();