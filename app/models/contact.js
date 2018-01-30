import DS from 'ember-data';

export default DS.Model.extend({
    type: DS.attr('string'),
    value: DS.attr('string'),
    info: DS.attr('string'),
    activity: DS.belongsTo('activity', { async: true })
});
