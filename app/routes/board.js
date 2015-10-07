import Ember from 'ember';

export default Ember.Route.extend({
  model(game) {
    return Ember.RSVP.hash({
      game: this.store.findRecord('game', game.game_id),
      suspects: this.store.findAll('suspect'),
      rooms: this.store.findAll('room'),
      weapons: this.store.findAll('weapon'),
    });
  },
  actions: {
    enterRoom(room, game) {
      this.transitionTo('room', game.id, room.id);
    },
    opponentGuess(player, who, where, how) {
      var game = this.get('model.game');
      this.get('model.game.opponents')[this.get('model.game.turn')].guesses.push({who: who, where: where, how: how});
      game.save();
    },
    nextTurn(game) {
      game.set('turn', game.get('turn')+1);
      game.save();
      console.log(game.get('turn'));
      debugger;
    }
  }
});
