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
      var params = {
        game: this.get('model.game'),
        player: this.get('player'),
        who: player.possibles.suspects.objectAt(Math.floor(Math.random()*(player.possibles.suspects.length))),
        where: player.possibles.rooms.objectAt(Math.floor(Math.random()*(player.possibles.rooms.length))),
        how: player.possibles.weapons.objectAt(Math.floor(Math.random()*(player.possibles.weapons.length))),
      }
      this.set('playersGuess', params.who + " in the " + params.where + " with the " + params.how);
      this.sendAction('opponentGuess', params);
    },
    nextTurn(game) {
      this.set('playersGuess', '');
      this.sendAction('nextTurn', game);
    }
  }
});
