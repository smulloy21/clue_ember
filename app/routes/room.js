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
      var character = game.get('character')
      var newGuess = {who: params.who, where: params.where, how: params.how}
      character.guesses.push(newGuess);
      game.set('turn', 0);
      game.set('checkOrder', 0);
      game.save();
      console.log(newGuess.who);
      var cards = [], reveal = false, checker = null;
      while (!reveal) {
        checker = game.get('opponents').objectAt(game.get('checkOrder'));
        cards = checker.cards;

        for(var i = 0; i < cards.length; i++) {
          if (cards[i] == newGuess.who || cards[i] == newGuess.where || cards[i] == newGuess.how) {
            reveal = cards[i];
            game.get('checks').push({who: checker.name, reveal: reveal, to: character.name})
          }
        }
        if (!reveal) {
          game.get('checks').push({who: checker.name, reveal: false, to: character.name})
        }
        game.set('check-order', game.get('check-order') + 1)
      }
      console.log(reveal);
      this.transitionTo('board', game.id);

      //   game.get('checks').push({who: checker, reveal: reveal, to: game.get('character')});
      //   game.save();
      //   debugger;
      //   game.set('checkOrder', game.get('checkOrder') + 1);
      //   game.save();
      // }
      // var reveals = [], output = [], cards=[];
      // while (reveals.length == 0) {
      // var checker = game.get('opponents').objectAt(game.get('check-order'));
      //   if (check-order = 5) {
      //     output.push("end");
      //     break;
      //   } else {
      //     cards = checker.cards
      //     for (var i = 0; i < cards.length; i++) {
      //       if (cards[i] == newGuess.how) {
      //         reveals.push(cards[i]);
      //       }
      //       if (cards[i] == newGuess.where) {
      //         reveals.push(cards[i]);
      //       }
      //       if (cards[i] == newGuess.who) {
      //         reveals.push(cards[i]);
      //       }
      //       if (reveals.length > 0) {
      //         //var card-to-reveal = random reveals card
      //         //push char shows "card" to output
      //         //push "end" to output
      //       } else {
      //         //push "char passes"
      //       }
      //     }
      //     if (reveal[-1] == "end") {
      //       for(var i = 0; i < output.length; i++){
      //         console.log(output[i]);
      //       }
      //       return output;
      //     }
      //     check-order += 1;
      //   }
      //
      // }

      // var cards, reveal, checker, gotReveal = false;
      // while (!gotReveal) {
      //   if (game.get('check-order') == 5) {
      //     came back
      //     ...
      //     break;
      //   } else {
      //     checker = game.get('opponents').objectAt(game.get('check-order'))
      //     cards = checker.cards;
      //     for(var i = 0; i < cards.length; i++) {
      //       if (cards[i] == newGuess.who || cards[i] == newGuess.where || cards[i] == newGuess.how) {
      //         reveal = cards[i];
      //         game.get('checks').push({who: checker, reveal: reveal, to: game.get('character').name})
      //         gotReveal = true;
      //       }
      //     }
      //     if (!gotReveal) {
      //       game.get('checks').push({who: checker, reveal: false, to: game.get('character').name})
      //     }
      //     game.set('check-order', game.get('check-order') + 1)
      //   }
      // }
    }
  }
});
