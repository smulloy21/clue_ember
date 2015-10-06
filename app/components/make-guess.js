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
      var wrong = [];
      if (params.who !== answer.who) { wrong.push(params.who)}
      if (params.how !== answer.how) {wrong.push(params.how)}
      if (params.where !== answer.where) {wrong.push(params.where)}
      if (wrong.length > 0) {
        // clue = wrong[random.w]
        this.set("message", "You got " +wrong.length+ " wrong.");
      } else {
        this.set("message", "You win!");
      }
      debugger;
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
