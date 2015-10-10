import Ember from 'ember';

export default Ember.Component.extend({
  guessForm: true,
  actions: {
    makeGuess() {
      var params = {
        who: this.get('who'),
        where: this.get('model.room.name'),
        how: this.get('how'),
      };
      this.set('guessForm', false);
      this.sendAction('makeGuess', params, this.get('model.game'));
    },
    leaveRoom(game) {
      var id = game.id;
      this.transitionTo('board', id);
    }
  }
});
