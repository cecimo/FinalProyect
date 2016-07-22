var app = angular.module('GeoTimeApp', ['ngRoute']);


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
		$scope.levels = data.data.records; console.log($scope.levels);
		var lvloid;
		$(".levels").click(function clickLevel(){
			var buttonName = $(this).text();
			console.log($(this).text());
			
			$.each($scope.levels, function(index,value){

				if (buttonName == value.nam){
					lvloid = value.oid;
					console.log(lvloid);						
				}
			});
			$.each($scope.levels, function(index,value){
				if(lvloid == value.pid){
					console.log(lvloid == value.pid);
					var button = "<button class=\" levels btn-flat col s6\" style=\"background-color:"+value.col+";\">"+value.nam+"</button>";
					$(".conti").append(button);
					console.log(value.col);
				}

			});

		});
	});
}]);


// app.controller('barSelector', ['$scope', '$http', '$routeParams', function($scope,$http,$routeParams){
// 	$.get('js/events.json').success(function(data){
// 		$scope.events=data;
// 	})
// 	barSelector();
// }])
/*
app.directive('barDir', function(){
	return {
		restrict:"E",
		templateUrl:"views/barSelector.html",
	}
});*/

app.directive('tableDir', function(){
	return {
		restrict:"E",
		templateUrl:"views/table.html",
	}
});

/*function barSelector(){
	var slider = document.getElementById('test5');
	noUiSlider.create(slider, {
	start: [2500],
	step: 1,
	range: {
	 'min': 0,
	 'max': 4600
	}
	});

	{{}}
}
console.log($("#test5").val());
*/



$(".levels").click(function clickLevel(){
	var buttonName = $(this).text();
	console.log($(this).text());
	

	$.each(JsonObject, function(index,value){

		if (buttonName == value.nam){
			lvloid = value.oid;
			console.log(lvloid);						
		}	

		if(lvloid == value.pid){
			console.log(lvloid == value.pid);
			var button = "<button class=\" levels btn-flat col s6\" style=\"background-color:"+value.col+";\">"+value.nam+"</button>";
			$(".conti").append(button);
		
		}

	});



});	
