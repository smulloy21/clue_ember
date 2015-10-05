import DS from 'ember-data';

export default DS.Model.extend({
  character: DS.attr(),
  answer: DS.attr(),
  guesses: DS.hasMany('guess', {async: true}),
  win: DS.attr(),
  score: DS.attr(),
  rooms: DS.attr(),
  people: DS.attr(),
  weapons: DS.attr()
});
