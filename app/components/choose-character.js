import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newGame(character, suspects, rooms, weapons) {
      var params = {
        character: character,
        guesses: [],
        win: false,
        score: 0,
        rooms: rooms,
        suspects: suspects,
        weapons: weapons,
        answer: {
          who: suspects.objectAt(Math.floor(Math.random()*6)),
          where: rooms.objectAt(Math.floor(Math.random()*6)),
          how: weapons.objectAt(Math.floor(Math.random()*6))
        }
      };
      console.log(params.answer.who);
      this.sendAction('newGame', params, suspects, rooms, weapons);
    }
  }
});
