import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newGame(character) {
      var player = {name: character.get('name'), cards: [], guesses: []},
          opponents = [],
          cardArray = [],
          notes = [],
          suspects = this.get('model.suspects'), suspectNames = [],
          rooms = this.get('model.rooms'), roomNames = [],
          weapons = this.get('model.weapons'), weaponNames = [];
      var name;
      for(var i = 0; i < suspects.get('length'); i++) {
        name = suspects.objectAt(i).get('name');
        suspectNames.push(name);
        cardArray.push(name);
      }
      for(var i = 0; i < rooms.get('length'); i++) {
        name = rooms.objectAt(i).get('name');
        roomNames.push(name);
        cardArray.push(name);
      }
      for(var i = 0; i < weapons.get('length'); i++) {
        name = weapons.objectAt(i).get('name');
        weaponNames.push(name);
        cardArray.push(name);
      }
      for(var i = 0; i < suspectNames.length; i++) {
        if (suspectNames[i] !== character.get('name')) {
          opponents.push({name: suspectNames[i], cards: [], guesses: [], possibles: {suspects: suspectNames.slice(), rooms: roomNames.slice(), weapons: weaponNames.slice()}});
        }
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
      var opponent, card, index;
      for (var i = 0; i < opponents.length; i++) {
        opponent = opponents[i];
        opponent.cards = cardArray.splice(0,3);
        for (var j = 0; j < opponent.cards.length; j++) {
          card = opponent.cards[j];
          index = opponent.possibles.suspects.indexOf(card);
          if (index !== -1) {
            opponent.possibles.suspects.splice(index, 1);
          }
          index = opponent.possibles.rooms.indexOf(card);
          if (index !== -1) {
            opponent.possibles.rooms.splice(index, 1);
          }
          index = opponent.possibles.weapons.indexOf(card);
          if (index !== -1) {
            opponent.possibles.weapons.splice(index, 1);
          }
        }
      }
      var params = {
        character: player,
        suspects: suspects,
        rooms: rooms,
        weapons: weapons,
        answer: {
          who: who,
          where: where,
          how: how,
        },
        opponents: opponents,
        turn: 5,
        checkOrder: 0,
        checks: [],
        notes: []
      };
      console.log(params.answer.who + " in the " + params.answer.where + " with the " + params.answer.how);
      this.sendAction('newGame', params);
    }
  }
});
