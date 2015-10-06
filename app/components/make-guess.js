import Ember from 'ember';

export default Ember.Component.extend({
  guessForm: true,
  message: '',
  actions: {
    makeGuess() {
      var params = {
        who: this.get('who'),
        where: this.get('model.room.name'),
        how: this.get('how'),
        game: this.get('model.game')
      };
      var answer = params.game.get('answer');
      if (params.who == answer.who && params.where == answer.where && params.how == answer.how) {
        this.set('message', "You won.");
      } else if (params.who == answer.who && params.where == answer.where || params.where == answer.where && params.how == answer.how || params.who == answer.who && params.how == answer.how) {
        this.set('message', "You got two things correct.");
      } else if (params.who == answer.who || params.where == answer.where || params.how == answer.how) {
        this.set('message', "You got one thing correct.");
      } else {
        this.set('message', "You got nothing correct.");
      }
      this.set('guessForm', false);
      this.sendAction('makeGuess', params);
    },
    guessAgain() {
      this.set('message', '');
      this.set('guessForm', true);
    },
    leaveRoom(game) {
      var id = game.id;
      console.log(id);
      this.transitionTo('board', id);
    }
  }
});
