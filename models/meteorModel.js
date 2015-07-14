MeteorModel = {
    Collection: new Mongo.Collection("meteors"),
    MAX_COUNT: 10,
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
            size: size,
            name: name
        };
    }
};
