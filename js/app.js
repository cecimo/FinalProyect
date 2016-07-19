var app = angular.module('GeoTimeApp', ['ngRoute']);
var JsonObject;
var lvloid;

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl:"index.html",
		controller: 'getIntervals'
	})

	.otherwise({
		redirectTo: '/'
	})
}]);

app.controller('getIntervals', ['$scope','$http',function($scope,$http){
	$http.get("http://paleobiodb.org/data1.1/intervals/list.json?scale=1").then(function (data){
		$scope.levels = data.data.records; 
		JsonObject = data.data.records;
	});
}]);


$(document).on('click', '.levels', function(){
	lvloid=null;

	var buttonName = $(this).text();
	console.log($(this).text());
	
	$.each(JsonObject, function(index,value){

		if (buttonName === value.nam){
			lvloid = value.oid;
			console.log(lvloid);						
		}

		else if(lvloid === value.pid){
			console.log(lvloid);
			var button = "<button class=\"btn-flat levels col s6\" style=\"background-color:"+value.col+";\">"+value.nam+"</button>";
			$(".conti").append(button);

		}

	});

});	







app.controller('barSelector', ['$scope', '$http', '$routeParams', function($scope,$http,$routeParams){
	$.get('js/events.json').success(function(data){
		$scope.events=data;
	})
	barSelector();
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

function barSelector(){
	var slider = document.getElementById('test5');
	noUiSlider.create(slider, {
		start: [2500],
		step: 1,
		range: {
			'min': 0,
			'max': 4600
		}
	});
}
