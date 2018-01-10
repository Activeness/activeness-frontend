import DS from 'ember-data';

export default DS.Model.extend({
    version: DS.attr('number'),
    active: DS.attr('boolean'),
    // categories: DS.hasMany('category'),
    // organizer: DS.belongsTo('organizer'),
    date: DS.attr('date'),
    title: DS.attr('string'),
    description: DS.attr('string'),
    img: DS.attr('string'),                         // Wie, wenn mehr als 1 Bild möglich sein soll?
    // address: DS.hasMany('address'),
    action: DS.attr('boolean'),
    sport: DS.attr('boolean'),
    // suitabilities: DS.hasMany('suitability'),       // geeignet für Kinder, Erwachsene, Senioren ... ???
    // costs: DS.hasMany('cost'),                      // String ???
    // langs: DS.hasMany('language'),                  // Relation needed ???
    rating: DS.attr(),                              // Relation needed
    // comments: DS.hasMany('comment'),
    reservation: DS.attr('boolean')
});
