//dataService.js 

var app = angular.module('quoteBook'); 

app.service('dataService', function(){

	console.log("service loaded"); 

	var quotes = [
	    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
	    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
	    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
	    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
	    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
	    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
	    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
	];

	this.getData = function(){
		return quotes; 
	}

	this.addData = function(){
		for(var i = 0; i<=arr.length; i++){
			if(arr[i].text && arr[i].author){
				//arr.push({text, author}); 
			}
			else{
				alert("You need to add more data!"); 
			}
		}
	}

	this.removeData = function(str){

	}


});