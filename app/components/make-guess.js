import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    makeGuess() {
      var params = {
        who: this.get('who'),
        where: this.get('model.room.name'),
        how: this.get('how'),
        game: this.get('model.game')
      };
      this.sendAction('makeGuess', params);
    }
  }
});
