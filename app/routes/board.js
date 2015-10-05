import Ember from 'ember';

export default Ember.Route.extend({
  model(game) {
    return this.store.findRecord('game', game.game_id);
  },
  actions: {
    makeGuess(params) {
      console.log('made it to the route');
      var newGuess = this.store.createRecord('guess', params);
      var game = params.game;
      newGuess.save().then(function() {
        return game.save();
      });
      console.log('made it through the route');
    }
  }
});
