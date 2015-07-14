Template.body.events({
    "click #buy-meteor": function(e){
        Meteor.call("buyMeteor", e.currentTarget.getAttribute("data-meteor-id"));
    }
});
