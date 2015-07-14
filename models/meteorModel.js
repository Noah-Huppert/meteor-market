var MeteorModel = {
    Collection: new Mongo.Collection("meteors"),
    MAX_COUNT: 30,
    SIZE_SMALL: "small",
    SIZE_MEDIUM: "medium",
    SIZE_LARGE: "large",
    build: function(_id, size, name){
        if(size !== this.SIZE_SMALL && size !== this.SIZE_MEDIUM && size !== this.SIZE_LARGE){
            throw "Meteor size must either be MeteorModel.SIZE_SMALL, " +
                  "MeteorModel.SIZE_MEDIUM, or MeteorModel.SIZE_LARGE" +
                  "(was: \"" + size + "\")";
        }

        return {
            _id: _id + "",
            size: size,
            name: name
        };
    }
};


if(Meteor.isClient){
    window.MeteorModel = MeteorModel;
} else if(Meteor.isServer){
    Meteor.Models = {
        Meteor: MeteorModel
    };
}
