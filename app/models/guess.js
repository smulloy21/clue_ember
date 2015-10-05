import DS from 'ember-data';

export default DS.Model.extend({
  game: DS.belongsTo('game', {async: true}),
  who: DS.attr(),
  where: DS.attr(),
  how: DS.attr()
});
