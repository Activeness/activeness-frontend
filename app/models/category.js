import DS from 'ember-data';

export default DS.Model.extend({
    ico: DS.attr('string', { defaultValue: 'calendar-check-o' })
});
