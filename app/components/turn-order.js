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
      var who, where, how, gotWho = false, gotWhere = false, gotHow = false;
      var game = this.get('model.game');
      var player = this.get('player');
      while (!gotWho) {
        who = this.get('model.suspects').objectAt(Math.floor(Math.random()*6)).get('name');
        if (player.cards[0] !== who && player.cards[1] !== who && player.cards[2] !== who) {
          gotWho = true;
        }
      }
      while (!gotWhere) {
        where = this.get('model.rooms').objectAt(Math.floor(Math.random()*6)).get('name');
        if (player.cards[0] !== where && player.cards[1] !== where && player.cards[2] !== where) {
          gotWhere = true;
        }
      }
      while (!gotHow) {
        how = this.get('model.weapons').objectAt(Math.floor(Math.random()*6)).get('name');
        if (player.cards[0] !== how && player.cards[1] !== how && player.cards[2] !== how) {
          gotHow = true;
        }
      }
      this.set('playersGuess', who + " in the " + where + " with the " + how);
      this.sendAction('opponentGuess', who, where, how, game);
    },
    nextTurn(game) {
      this.set('playersGuess', '');
      this.sendAction('nextTurn', game);
    }
  }
});
