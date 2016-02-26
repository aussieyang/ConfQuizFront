console.log('working as well');


var Question = Backbone.Model.extend({
	urlRoot: 'http://localhost:3000/api/questions'
});



var Questions = Backbone.Collection.extend({
	model: Question,
	url: 'http://localhost:3000/api/questions'
});


console.log(Questions);





// for (var i = 0; i < questions.length; i++){
// 	console.log(questions[i].get('content'));
// }



// $('#qid').html(question.get('content'));
