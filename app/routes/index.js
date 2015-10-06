import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      games: this.store.findAll('game'),
      rooms: this.store.findAll('room'),
      suspects: this.store.findAll('suspect'),
      weapons: this.store.findAll('weapon')
    });
  },
  actions: {
    newGame(params, suspects, rooms, weapons) {
      var newGame = this.store.createRecord('game', params);
      newGame.save().then(function() {
        return suspects.save().then(function() {
          return rooms.save().then(function() {
            return weapons.save();
          });
        });
      });
      var id = newGame.id;
      console.log(id);
      this.transitionTo('board', id);
    }
  }
});
