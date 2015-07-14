Meteor.startup(function(){
    Meteor.setInterval(function(){
        spawnMeteor();
    }, 30000);//Every 30 seconds
});

function spawnMeteor(){
    if(Meteor.Models.Meteor.Collection.find({}).count() < Meteor.Models.Meteor.MAX_COUNT){
        lastMeteor = Meteor.Models.Meteor.Collection.findOne({}, { sort: { _id: -1 }});
        lastId = 0;

        if(lastMeteor !== undefined){
            lastId = parseInt(lastMeteor._id);
        }

        var nextSize = undefined;

        switch(Meteor.randomInt(1, 3)){
            case 1:
                nextSize = Meteor.Models.Meteor.SIZE_SMALL;
                break;
            case 2:
                nextSize = Meteor.Models.Meteor.SIZE_MEDIUM;
                break;
            case 3:
                nextSize = Meteor.Models.Meteor.SIZE_LARGE;
                break;
        }

        var nextMeteor = Meteor.Models.Meteor.build(
            lastId + 1,
            nextSize,
            "Name!"
        );

        Meteor.Models.Meteor.Collection.insert(nextMeteor, function(err){
            if(err !== null){
                console.error(err);
            }
        });
    }
}
