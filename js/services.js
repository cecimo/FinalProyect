var app = angular.module('GeoTimeApp');

app.service('getApiData', function() {


	$.ajax({
		url:"http://paleobiodb.org/data1.1/intervals/list.json?scale=1",
		success: prueba,
		error: function(){
			console.log("Errooorrr!");
		},
		dataType: 'json'
	});

	var prueba = function(data) {
		var dataObject = data.records;
		console.log(dataObject);
		return dataObject;
	/*	
		$.each(data.records, function(index,value){
			
			if (value.lvl===1){
				var button= "<div class=\"col s6\"><button class=\"levels btn-flat\" style=\"background-color:"
				+value.col+"; color:white;\">"+value.nam+"</button></div>";
				$(".conti").append(button); 
			}

			$(".levels").click(function clickLevel(){
				if ($(this).text() === value.nam){
					lvloid = value.oid;
				}		

				if(value.pid === lvloid){
					var button = "<div class=\"col s6\"><button class=\"levels btn-flat\" style=\"background-color:"
					+value.col+"; color:white;\">"+value.nam+"</button></div>";
					$(".conti").append(button);
				}
			});
			
		});*/

	}
});




