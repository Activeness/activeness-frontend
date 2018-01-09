import DS from 'ember-data';

export default DS.Model.extend({
    version: DS.attr('number'),
    active: DS.attr('boolean'),
    date: DS.attr('date'),
    img: DS.attr('string'),
    title: DS.attr('string'),
    description: DS.attr('string'),
    organizer: DS.attr('string'),
    action: DS.attr('boolean'),
    sport: DS.attr('boolean'),
    suitabilities: DS.hasMany('suitability'),       // geeignet für Kinder, Erwachsene, Senioren ... ???
    costs: DS.hasMany('cost'),       // String ???
    langs: DS.hasMany('language'),  // Relation needed ???
    rating: DS.attr(),              // Relation needed
    // comments: DS.hasMany('comment'),            // Relation needed
    reservation: DS.attr('boolean')
});
