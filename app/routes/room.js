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
});
