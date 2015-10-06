import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      room: this.store.findRecord('room', params.room_id),
      game: this.store.findRecord('game', params.game_id),
      suspects: this.store.findAll('suspect'),
      weapons: this.store.findAll('weapon'),
    });
  },
  actions: {
    makeGuess(params) {
      var newGuess = this.store.createRecord('guess', params);
      var game = params.game;
      newGuess.save().then(function() {
        return game.save();
      });
    }
  }
});
