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
    newGame(character, suspects, rooms, weapons) {
      console.log(suspects.objectAt(0));
      // var params = {
      //   character: character,
      //   guesses: [],
      //   win: false,
      //   score: 0,
      //   rooms: rooms,
      //   suspects: suspects,
      //   weapons: weapons,
      //   answer: {
      //     who: "Professor Plum",
      //     where: "Library",
      //     how: "knife"
      //   }
      // };
      // console.log(params.answer.who.name);
      // console.log('made it past params');
      // var newGame = this.store.createRecord('game', params);
      // newGame.save().then(function() {
      //   return suspects.save().then(function() {
      //     return rooms.save().then(function() {
      //       return weapons.save();
      //     });
      //   });
      // });
      // var id = newGame.id;
      // console.log(id);
      // this.transitionTo('board', id);
    }
  }
});
