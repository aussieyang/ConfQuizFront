//Creating backbone template (always nested inside a div)
var QuestionView = Backbone.View.extend({

//Wraps in div with class
  tagName: 'div',
  className: 'container',
  template: $('#question-template').html(),

//Render the div
  render: function() {

    var html = Mustache.render(this.template, this.model.toJSON());

    this.$el.html(html);

    return this;
  }

});
