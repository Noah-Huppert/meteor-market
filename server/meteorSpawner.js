Meteor.startup(function(){
    spawnMeteor();
    Meteor.setInterval(function(){
        spawnMeteor();
    }, 30000);//Every 30 seconds


    Meteor.setInterval(function(){
        var countdownObj = NextMeteorCountdownModel.get();

        if(MeteorModel.Collection.find({}).count() < MeteorModel.MAX_COUNT){
            NextMeteorCountdownModel.update(countdownObj.value - 1);
        } else {
            NextMeteorCountdownModel.update(-1);
        }
    }, 1000);

});

function spawnMeteor(){
    if(MeteorModel.Collection.find({}).count() < MeteorModel.MAX_COUNT){
        lastMeteor = MeteorModel.Collection.findOne({}, { sort: { _id: -1 }});
        lastId = 0;

        if(lastMeteor !== undefined){
            lastId = parseInt(lastMeteor._id);
        }

        var nextSize = undefined;

        switch(Meteor.randomInt(1, 3)){
            case 1:
                nextSize = MeteorModel.SIZE_SMALL;
                break;
            case 2:
                nextSize = MeteorModel.SIZE_MEDIUM;
                break;
            case 3:
                nextSize = MeteorModel.SIZE_LARGE;
                break;
        }

        var nextMeteor = MeteorModel.build(
            lastId + 1,
            nextSize,
            MeteorNames[Meteor.randomInt(0, MeteorNames.length)],
            new Date()
        );

        MeteorModel.Collection.insert(nextMeteor, function(err){
            if(err !== null){
                console.error(err);
            } else {
                NextMeteorCountdownModel.update(30);
            }
        });
    }
}
