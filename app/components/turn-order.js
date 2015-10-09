import Ember from 'ember';

export default Ember.Component.extend({
  player: Ember.computed('model.game.turn', function() {
<<<<<<< HEAD
    var player;
    if (this.get('model.game.turn') == 5) {
      player = this.get('model.game.character')
    } else {
      player = this.get('model.game.opponents').objectAt(this.get('model.game.turn'));
    }
    return player;
=======
    var currentPlayer;
    if (this.get('model.game.turn') == 5) {
      currentPlayer = this.get('model.game.character')
    } else {
      currentPlayer = this.get('model.game.opponents').objectAt(this.get('model.game.turn'));
    }
    return currentPlayer;
>>>>>>> goose-chase
  }),
  playersGuess: '',
  actions: {
    enterRoom(room, game) {
      this.sendAction('enterRoom', room, game);
    },
    opponentGuess() {
      var who, where, how, gotWho = false, gotWhere = false, gotHow = false;
<<<<<<< HEAD
      while (!gotWho) {
        who = this.get('model.suspects').objectAt(Math.floor(Math.random()*6)).get('name');
        if (this.get('player').cards[0] !== who && this.get('player').cards[1] !== who && this.get('player').cards[2] !== who) {
=======
      var game = this.get('model.game');
      var player = this.get('player');
      while (!gotWho) {
        who = this.get('model.suspects').objectAt(Math.floor(Math.random()*6)).get('name');
        if (player.cards[0] !== who && player.cards[1] !== who && player.cards[2] !== who) {
>>>>>>> goose-chase
          gotWho = true;
        }
      }
      while (!gotWhere) {
        where = this.get('model.rooms').objectAt(Math.floor(Math.random()*6)).get('name');
<<<<<<< HEAD
        if (this.get('player').cards[0] !== where && this.get('player').cards[1] !== where && this.get('player').cards[2] !== where) {
=======
        if (player.cards[0] !== where && player.cards[1] !== where && player.cards[2] !== where) {
>>>>>>> goose-chase
          gotWhere = true;
        }
      }
      while (!gotHow) {
        how = this.get('model.weapons').objectAt(Math.floor(Math.random()*6)).get('name');
<<<<<<< HEAD
        if (this.get('player').cards[0] !== how && this.get('player').cards[1] !== how && this.get('player').cards[2] !== how) {
=======
        if (player.cards[0] !== how && player.cards[1] !== how && player.cards[2] !== how) {
>>>>>>> goose-chase
          gotHow = true;
        }
      }
      this.set('playersGuess', who + " in the " + where + " with the " + how);
<<<<<<< HEAD
      this.sendAction('opponentGuess', who, where, how);
=======
      this.sendAction('opponentGuess', who, where, how, game);
>>>>>>> goose-chase
    },
    nextTurn(game) {
      this.set('playersGuess', '');
      this.sendAction('nextTurn', game);
    }
  }
});
