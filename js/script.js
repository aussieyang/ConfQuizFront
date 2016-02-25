console.log('working as well');


var Question = Backbone.Model.extend({

	urlRoot: 'http://localhost:3000/api/questions'
});

var Questions = Backbone.Collection.extend({
	model: Question,
	url: 'http://localhost:3000/api/questions'
});


console.log(Questions);

var Router = Backbone.Router.extend({

routes: {
		"hhh": "showIndex",
		"": "showQuestion"

},

showIndex: function(){

},

showQuestion: function(){
	question = new Question({id: 21});
	console.log(question);
	question.fetch().done(function(){
		console.log(question);
		$('#qid').html(question.get('content'));
		$('#answer1').html(question.get('a'));
		$('#answer2').html(question.get('b'));
		$('#answer3').html(question.get('c'));
		$('#answer4').html(question.get('d'));
	});
}



});

$(document).ready( function() {
  console.log('Initiating router...');
  var router = new Router();
  Backbone.history.start();
});



// for (var i = 0; i < questions.length; i++){
// 	console.log(questions[i].get('content'));
// }



// $('#qid').html(question.get('content'));
