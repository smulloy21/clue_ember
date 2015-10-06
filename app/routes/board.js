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
    }
  }
});
