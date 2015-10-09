import DS from 'ember-data';

export default DS.Model.extend({
  character: DS.attr(),
  answer: DS.attr(),
  rooms: DS.hasMany('room', {async: true}),
  suspects: DS.hasMany('suspect', {async: true}),
  weapons: DS.hasMany('weapon', {async: true}),
  opponents: DS.attr(),
  turn: DS.attr(),
  checkOrder: DS.attr(),
  checks: DS.attr(),
  notes: DS.attr(),
});
