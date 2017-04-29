$( document ).ready(function() {
   $('#recipeText').append('Hello World');
    $('#query').append('a');


    var lastentry = "";

	
	$('#recipeText').keyup(function(event) {
   	
   	 var recipeTextVal = $('#recipeText').val(); 
     
     if (recipeTextVal[recipeTextVal.length -2] == ' ' && recipeTextVal.length >= 3 && recipeTextVal[recipeTextVal.length -1] != ' '){

     			console.log('new word');
     }

     
   });
   
   




});

