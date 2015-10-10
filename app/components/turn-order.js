import Ember from 'ember';

export default Ember.Component.extend({
  player: Ember.computed('model.game.turn', function() {
    var player;
    if (this.get('model.game.turn') == 5) {
      player = this.get('model.game.character')
    } else {
      player = this.get('model.game.opponents').objectAt(this.get('model.game.turn'));
    }
    return player;
  }),
  playersGuess: '',
  actions: {
    enterRoom(room, game) {
      this.sendAction('enterRoom', room, game);
    },
    opponentGuess() {
      var who, where, how;
      var game = this.get('model.game');
      var player = this.get('player');

      this.set('playersGuess', who + " in the " + where + " with the " + how);
      this.sendAction('opponentGuess', who, where, how, game);
    },
    nextTurn(game) {
      this.set('playersGuess', '');
      this.sendAction('nextTurn', game);
    }
  }
});
