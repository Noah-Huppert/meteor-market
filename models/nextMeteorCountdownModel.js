NextMeteorCountdownModel = {
    Collection: new Mongo.Collection("next_meteor_countdown"),
    update: function(value, cb){
        this.Collection.update({ _id: "1" }, { value: parseInt(value) }, { upsert: true });
    },
    get: function(){
        if(this.Collection.find({}).count() == 0){
            this.update(-1);
        }

        return this.Collection.findOne({ _id: "1" });
    }
}
