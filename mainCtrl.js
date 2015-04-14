var app = angular.module('quoteBook'); 

app.controller('mainCtrl', function($scope, dataService){
	$scope.test = "QUOTEBOOK"; 

	$scope.newPost = {
		text: "",
		author: ""
	}

	$scope.addPost = function(){
		dataService.addData($scope.newPost);
	}

	$scope.quotes = dataService.getData(); 

});