import Ember from 'ember';

export default Ember.Component.extend({
  inRoom: false,
  actions: {
    leaveRoom() {
      this.set('inRoom', false);
    },
    enterRoom(room) {
      console.log(room);
      this.set('inRoom', room);
      console.log(this.get('inRoom'));
    }
  }
});
