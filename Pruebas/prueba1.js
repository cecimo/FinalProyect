
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

}
var id 
var x = 1
var allObj = data.records
	for (var i=0; i<allObj.length; i++){
		var object = data.records[i]
		d.forEach 
		if (data.records[i].lvl===x){
			id = data.records[i].oid;
			var html = "<button class=\"lvl"+x+"\" >"+data.records[i].nam+"</button>";
			$('.container').append(html);

			$('.lvl').on('click', function(){

			})
console.log(data.records);
		}
	}

	
}
/*
$('.lvl1').on('click', function(){
	console.log("hola!");
})
*/
/*
function getStepTwo(data) {
	console.log("hola!");
}*/
