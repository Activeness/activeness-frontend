import DS from 'ember-data';

export default DS.Model.extend({
    type: DS.attr('string'),
    price: DS.attr('string'),
    currency: DS.attr('string'),
    description: DS.attr('string'),
    activity: DS.belongsTo('activity', { async: true, inverse: null })
});
