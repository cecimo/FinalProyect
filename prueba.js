
function hola(){
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
	
	getStepOne(data);
	getStepTwo(data);

}

function getStepOne(data) {
	for (var i=0; i<data.records.length; i++){
		if (data.records[i].lvl===1){
			var html = "<p class=\"lvl1\" style=\"background-color:"+data.records[i].col+";\">"+data.records[i].nam+"</p";
			$('.container').append(html);

		}
	}

}

$('.lvl1').on("click", getStepTwo(data));

function getStepTwo(data) {
	console.log("hola!");
}