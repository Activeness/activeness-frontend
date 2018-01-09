import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string'),
    ico: DS.attr('string', { defaultValue: 'calendar-check-o' })
});
