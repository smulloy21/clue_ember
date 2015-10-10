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
    makeGuess(params, game) {
      var character = game.get('character');
      var newGuess = {who: params.who, where: params.where, how: params.how};
      character.guesses.push(newGuess);
      game.set('turn', 0);
      game.set('checkOrder', 0);
      game.save();
      var cards = [], reveal, checker = null, gotReveal = false;
      while(!gotReveal) {
        if (game.get('checkOrder') === 5) {
          break;
        }
        checker = game.get('opponents').objectAt(game.get('checkOrder'));
        cards = checker.cards;
        for(var i = 0; i < cards.length; i++) {
          if (cards[i] === newGuess.who || cards[i] === newGuess.where || cards[i] === newGuess.how) {
            reveal = cards[i];
            game.get('checks').push({who: checker.name, reveal: reveal, to: character.name});
            gotReveal = true;
          }
        }
        if (!gotReveal) {
          game.get('checks').push({who: checker.name, reveal: false, to: character.name});
        }
        game.set('checkOrder', game.get('checkOrder') + 1);
        game.save();
      }
      this.transitionTo('board', game.id);
    }
  }
});
