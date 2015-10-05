import Ember from 'ember';

export default Ember.Route.extend({
  model(game) {
    return this.store.findRecord('game', game.game_id);
  },
});
