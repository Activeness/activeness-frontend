import DS from 'ember-data';

export default DS.Model.extend({
    version: DS.attr('number'),
    active: DS.attr('boolean'),
    categories: DS.hasMany('category', { async: true, inverse: 'activity' }),
    // organizer: DS.belongsTo('organizer', { async: true }),
    date: DS.attr('date'),
    title: DS.attr('string'),
    description: DS.attr('string'),
    img: DS.attr('string'),                         // Wie, wenn mehr als 1 Bild möglich sein soll?
    // address: DS.hasMany('address', { async: true }),
    action: DS.attr('boolean'),
    sport: DS.attr('boolean'),
    // suitabilities: DS.hasMany('suitability', { async: true }),       // geeignet für Kinder, Erwachsene, Senioren ... ???
    // costs: DS.hasMany('cost', { async: true }),                      // String ???
    // langs: DS.hasMany('language', { async: true }),                  // Relation needed ???
    rating: DS.attr(),                              // Relation needed
    // comments: DS.hasMany('comment', { async: true }),
    reservation: DS.attr('boolean')
});
