import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newGame(character) {
      var params = {
        character: character.get('name'),
        guesses: [],
        rooms: this.get('model.rooms'),
        suspects: this.get('model.suspects'),
        weapons: this.get('model.weapons'),
        answer: {
          who: this.get('model.suspects').objectAt(Math.floor(Math.random()*6)).get('name'),
          where: this.get('model.rooms').objectAt(Math.floor(Math.random()*6)).get('name'),
          how: this.get('model.weapons').objectAt(Math.floor(Math.random()*6)).get('name')
        }
      };
      console.log(params.answer.who);
      this.sendAction('newGame', params);
    }
  }
});
