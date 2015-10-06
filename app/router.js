import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('board', {path: '/:game_id'});
  this.route('room', {path: '/:game_id/:room_id'});
});

export default Router;
