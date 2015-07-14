//Models
function MarketItem(userId, title, description, imageUrl, price){
    return {
        "user_id": userId,
        "title": title,
        "description": description,
        "image_url": imageUrl,
        "price": price
    };
}

//MongoDD Collections
var MarketItems = new Mongo.Collection("market_items");

if (Meteor.isClient) {
    //Helpers
    Template.registerHelper("marketItems", function(){
        return MarketItems.find({});
    });

    Template.registerHelper("username", function(id){
        if(id === undefined){
            throw "id must be defined";
        }

        var user = Meteor.users.findOne({ "_id": id });

        if(user === undefined){
            throw "user with id " + id + " does not exist";
        }

        return user.profile.name;
    });

    Template.registerHelper("equals", function (a, b) {
      return a === b;
    });

    //Routes
    Router.route("/", function(){
        this.render("Home");
    });

    Router.route("/item/:id", function(){
        var item = MarketItems.findOne({ "id": parseInt(this.params.id) });

        this.render("Item", {
            data: item
        });
    });

    Template.body.events({
        "click #header-user-logout": function(){
            Meteor.logout();
        },
        "click .marketItem #delete-item": function(){
            var id = document.querySelector(".marketItem #delete-item").getAttribute("data-id");
            Meteor.call("removeMarketItem", id, function(err){
                Router.go("/");
            });
        }
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {

  });

  Meteor.methods({
      "removeMarketItem": function(id, removeCb){
          MarketItems.remove({ "id": parseInt(id) }, function(err){
              if(removeCb != undefined){
                  removeCb(err);
              } else if(err !== null){
                  console.log(err);
              }
          });
      },
      "addMarketItem": function(doc, insertCb){
          var collection = MarketItems;

          lastItem = collection.findOne({}, { sort: {id: -1} });
          lastId = 0;

          if(lastItem !== undefined){
              lastId = lastItem.id;
          }

          doc.id = lastId + 1;

          collection.insert(doc, function(err, doc){
              if(insertCb !== undefined){
                  insertCb(err, doc);
              } else {
                  console.log(err, doc);
              }
          });
      }
  });
}
