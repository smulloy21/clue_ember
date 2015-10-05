import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('game');
  },
  actions: {
    newGame(character) {
      var rooms = ["Kitchen", "Ballroom", "Conservatory", "Dining Room", "Cellar", "Billard Room", "Library", "Lounge", "Hall", "Study"];
      var people = ["Miss Scarlet", "Professor Plum", "Mrs. Peacock", "Mr. Green", "Colonel Mustard", "Mrs. White"];
      var weapons = ["candlestick", "dagger", "lead pipe", "revolver", "rope", "wrench"];
      var params = {
        character: character,
        guesses: [],
        win: false,
        score: 0,
        rooms: rooms,
        people: people,
        weapons: weapons,
        answer: {
          who: people[Math.floor(Math.random()*6)],
          where: rooms[Math.floor(Math.random()*10)],
          how: weapons[Math.floor(Math.random()*6)]
        }
      };
      console.log('made it past params');
      var newGame = this.store.createRecord('game', params);
      newGame.save();
      var id = newGame.id;
      console.log(id);
      this.transitionTo('board', id);
    }
  }
});
