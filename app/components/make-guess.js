import Ember from 'ember';

export default Ember.Component.extend({
  guessForm: true,
  message: '',
  actions: {
    makeGuess() {
      var params = {
        who: this.get('who'),
        where: this.get('model.room.name'),
        how: this.get('how'),
        game: this.get('model.game')
      };
      if (params.who == params.game.get('answer').who && params.where == params.game.get('answer').where && params.how == params.game.get('answer').how) {
        this.set('message', "You won.");
      } else {
        this.set('message', "Keep guessing.");
      }
      this.set('guessForm', false);
      this.sendAction('makeGuess', params);
    },
    guessAgain() {
      this.set('message', '');
      this.set('guessForm', true);
    },
    leaveRoom(game) {
      var id = game.id;
      console.log(id);
      this.transitionTo('board', id);
    }
  }
});
