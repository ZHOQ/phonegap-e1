//setup data model
Person = Backbone.Model.extend({
	name: null,
	gender: null,
	dob: null
});



//create a view
var PersonView = Backbone.View.extend({
	
	el: '#people',  //the DOM element to which this view will be bound
	
	initialize: function() {		//code is run when view is created
		this.render();
	},

	render: function() {		//defines how to display the model
	
		//this is a very crude way to display a persons details. Can you improve it?
		this.$el.append("<li>" + this.model.get("name") + "");
		this.$el.append("<li>" + this.model.get("gender") + "</li>");
		this.$el.append("<li>" + this.model.get("dob") + "</li>" +"<br/>");
        
	}

});



//when the page is created
$(document).on("pagecreate","#pageone", function () {
 
 	//bind the view and model together
	var personView1 = new PersonView({model: person1});
	var personView2 = new PersonView({model: person2});
    var personView3 = new PersonView({model: person3});
	//how will you display additional people?
	
 
});



//create some people using the model
var person1 = new Person({name: 'John Smith', gender: 'm', dob: '12/05/1981'});
var person2 = new Person({name: 'Huang Jingjing', gender:'f', dob:'13/06/1994'})
var person3 = new Person({name: 'Lin Chenghong',gender:'f',dob:'25/03/1996'})



