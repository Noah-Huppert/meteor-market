//From http://stackoverflow.com/a/7228322/1478191
function randomInt(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

Meteor.randomInt = randomInt;
