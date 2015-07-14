Meteor.methods({
    "buyMeteor": function(id){
        MeteorModel.Collection.remove(id);
    }
})
