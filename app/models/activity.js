import DS from 'ember-data';

export default DS.Model.extend({
    version: DS.attr('number'),
    active: DS.attr('boolean'),
    date: DS.attr('date'),
    title: DS.attr('string'),
    description: DS.attr('string'),
    organizer: DS.attr('string'),
    img: DS.attr('string'),
    reservation: DS.attr('boolean')
});
