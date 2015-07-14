Meteor.publish("meteors", function(){
    return MeteorModel.Collection.find({});
});

Meteor.publish("nextMeteorCountdown", function(){
    return NextMeteorCountdownModel.Collection.find({});
});
