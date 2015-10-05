import Ember from 'ember';

export default Ember.Component.extend({
  inRoom: false,
  guessForm: false,
  actions: {
    enterRoom() {
      this.set('inRoom', true);
    },
    leaveRoom() {
      this.set('inRoom', false);
    },
    showGuessForm() {
      this.set('guessForm', true);
    },
    makeGuess() {
      var params = {
        who: this.get('who'),
        where: this.get('room'),
        how: this.get('how'),
        game: this.get('model')
      };
      this.set('guessForm', false);
      this.set('inRoom', false);
      this.sendAction('makeGuess', params);
    }
  }
});
