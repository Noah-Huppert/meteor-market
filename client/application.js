/* Subscriptions */
Meteor.subscribe("meteors");
Meteor.subscribe("nextMeteorCountdown");

/* Helpers */
Template.registerHelper("meteors", function(){
    return MeteorModel.Collection.find({});
});

Template.registerHelper("NextMeteorCountdown", function(){
    countdownObj =  NextMeteorCountdownModel.Collection.findOne({ _id: "1" });

    if(countdownObj === undefined){
        return -1;
    }

    return countdownObj.value;
});

Template.registerHelper("equal", function(a, b){
    return a === b;
});

Template.registerHelper("not_equal", function(a, b){
    return a !== b;
});

/* Routes */
Router.route("/", function(){
    this.render("Home");
});
