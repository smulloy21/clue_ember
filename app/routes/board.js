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
  // actions: {
  //   makeGuess(params) {
  //     console.log('made it to the route');
  //     var newGuess = this.store.createRecord('guess', params);
  //     var game = params.game;
  //     newGuess.save().then(function() {
  //       return game.save();
  //     });
  //     console.log('made it through the route');
  //   }
  // }
});
