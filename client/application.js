Meteor.subscribe("meteors");

Template.registerHelper("meteors", function(){
    return MeteorModel.Collection.find({});
});

Router.route("/", function(){
    this.render("Home");
});
