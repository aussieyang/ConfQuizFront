var Router = Backbone.Router.extend({

    routes: {
    		"#": "showIndex",
    		"": "showQuestion"
    },

    showIndex: function(){

    },


// Hardcoded to one question atm - needs more logic
    showQuestion: function(id){
    	question = new Question({id: id});
    	console.log(question);
    	question.fetch().done(function(){
    		console.log(question);
    		$('#qid').html(question.get('content'));
    		$('#answer1').html(question.get('a'));
    		$('#answer2').html(question.get('b'));
    		$('#answer3').html(question.get('c'));
    		$('#answer4').html(question.get('d'));
    	});

      var view = new QuestionView({ model: question });
      $('main').html( view.render().el );


    }

});



$(document).ready( function() {
  console.log('Initiating router...');
  var router = new Router();
  Backbone.history.start();
});
