import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newGame(character) {
      var player = {name: character.get('name'), cards: [], guesses: []},
          opponents = [],
          cardArray = [],
          suspects = this.get('model.suspects'),
          rooms = this.get('model.rooms'),
          weapons = this.get('model.weapons');
      for(var i = 0; i < suspects.get('length'); i++) {
        cardArray.push(suspects.objectAt(i).get('name'));
        if(suspects.objectAt(i).get('name') !== character.get('name')) {
          opponents.push({name: suspects.objectAt(i).get('name'), cards: [], guesses: []});
        }
      }
      for(var i = 0; i < rooms.get('length'); i++) {
        cardArray.push(rooms.objectAt(i).get('name'));
      }
      for(var i = 0; i < weapons.get('length'); i++) {
        cardArray.push(weapons.objectAt(i).get('name'));
      }
      var who = (cardArray.splice(Math.floor(Math.random()*6), 1)).toString(),
          where = (cardArray.splice(Math.floor(Math.random() * 9 + 5), 1)).toString(),
          how = (cardArray.splice(Math.floor(Math.random() * 6 + 13), 1)).toString(),
          shuffle = function(arr) {
            var copy = [], n = arr.length, i;
            while (n) {
              i = Math.floor(Math.random() * n--);
              copy.push(arr.splice(i, 1)[0]);
            }
            return copy;
          };
      cardArray = shuffle(cardArray);
      player.cards = cardArray.splice(0, 3);
      for(var i = 0; i < opponents.length; i++) {
        opponents[i].cards = cardArray.splice(0,3);
      }
      console.log(cardArray.length);
      var params = {
        character: player,
        guesses: [],
        rooms: rooms,
        suspects: suspects,
        weapons: weapons,
        answer: {
          who: who,
          where: where,
          how: how,
        },
        cards: cardArray,
        opponents: opponents,
      };
      console.log(params.answer.who + " in the " + params.answer.where + " with the " + params.answer.how);
      this.sendAction('newGame', params);
    }
  }
});
