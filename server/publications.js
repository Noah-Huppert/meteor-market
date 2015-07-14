Meteor.publish("meteors", function(){
    return Meteor.Models.Meteor.Collection.find({});
});
