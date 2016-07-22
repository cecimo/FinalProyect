var app = angular.module('GeoTimeApp', []);

var levelsObject;
var eventsObject;
var lvloid;
var barValue;

app.controller('getIntervals', ['$scope','$http',function($scope,$http){
	$http.get("http://paleobiodb.org/data1.1/intervals/list.json?scale=1").then(function (data){
		$scope.levels = data.data.records; 
		levelsObject = data.data.records;
	});
}]);

app.controller('barSelector', ['$scope', '$http', function($scope,$http){
	$http.get("js/events.json").then(function(data){
		$scope.events = data.data.events;
		eventsObject = data.data.events;
	});
}])

app.directive('barDir', function(){
	return {
		restrict:"E",
		templateUrl:"views/barSelector.html",
	}
});

app.directive('tableDir', function(){
	return {
		restrict:"E",
		templateUrl:"views/table.html",
	}
});


var slider = document.getElementById('sliders');

noUiSlider.create(slider, {
	start: [2500],
	step:50,
	range: {
		'min': 0,
		'max': 4600
	},
	format: wNumb({
		decimals: 0
	})
});

$(document).on('click', '#sliders', function(){
	barValue = slider.noUiSlider.get();
	console.log(barValue);
	$("#modalTitle").empty();
	$("#modalContent").empty();
	$("#modalAge").empty();

	$.each(eventsObject, function(index,value){

		if(barValue === value.egnumber){
			$("#modalTitle").text(value.name);
			$("#modalContent").text(value.description);
			$("#modalAge").text(value.age);
			$('.modal-trigger').leanModal();
		}
		else{console.log("heeiis")}
	});
});


$(document).on('click', '.levels', function(){
	lvloid=null;
	var buttonName = $(this).text();
	//$('.'+buttonName).empty();
	console.log($(this).text());


	$.each(levelsObject, function(index,value){

		if (buttonName.toString() === value.nam.toString()){
			lvloid = value.oid;
			console.log(lvloid);						
		}

		else if(lvloid == value.pid){
			console.log(lvloid);
			var button = "<div class=\""+value.nam+"\"><button class=\"btn-flat levels "+value.lvl+"\" style=\"background-color:"+value.col+";\">"+value.nam+"</button></div>";
			$('.'+buttonName).append(button);

		}

	});

});	
