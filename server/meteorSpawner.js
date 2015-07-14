MeteorSpawnDelay = 10;

Meteor.startup(function(){
    spawnMeteor();
    Meteor.setInterval(function(){
        spawnMeteor();
    }, MeteorSpawnDelay * 1000);


    Meteor.setInterval(function(){
        var countdownObj = NextMeteorCountdownModel.get();

        if(MeteorModel.Collection.find({}).count() < MeteorModel.MAX_COUNT){
            if(NextMeteorCountdownModel.get().value < 0){
                NextMeteorCountdownModel.update(MeteorSpawnDelay);
            } else {
                NextMeteorCountdownModel.update(countdownObj.value - 1);
            }
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

        var nextName = MeteorNames[Meteor.randomInt(0, MeteorNames.length)];
        var nextNameTries = 0;

        while(MeteorModel.Collection.find({ name: nextName }).count() !== 0 && nextNameTries < MeteorNames.length){
            nextName = MeteorNames[Meteor.randomInt(0, MeteorNames.length)];
            nextNameTries ++;//Prevent race condition
        }

        var nextMeteor = MeteorModel.build(
            lastId + 1,
            nextSize,
            nextName
        );

        MeteorModel.Collection.insert(nextMeteor, function(err){
            if(err !== null){
                console.error(err);
            } else {
                NextMeteorCountdownModel.update(MeteorSpawnDelay);
            }
        });
    }
}
