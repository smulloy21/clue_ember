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
      console.log('made it to the route');
      var newGuess = this.store.createRecord('guess', params);
      var game = params.game;
      newGuess.save().then(function() {
        return game.save();
      });
      console.log('made it through the route');
      console.log(newGuess.who);
      debugger;
      if (newGuess.get('who') == game.get('answer').who && newGuess.get('where') == game.get('answer').where && newGuess.get('how') == game.get('answer').how) {
        console.log('you won');
      } else {
        console.log('keep guessing');
      };
    }
  }
});
