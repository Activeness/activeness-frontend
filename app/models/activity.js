import DS from 'ember-data';

export default DS.Model.extend({
    version: DS.attr('number'),
    active: DS.attr('boolean'),
    categories: DS.hasMany('category', { async: true }),        // Categories
    organizer: DS.belongsTo('organizer', { async: true }),      // Organizer
    date: DS.attr('date'),                                      // When
    title: DS.attr('string'),                                   // Title
    description: DS.attr('string'),                             // Description
    img: DS.attr('string'),                                     // Image of the activity
    address: DS.hasMany('address', { async: true }),            // Where
    places: DS.hasMany('place', { async: true }),               // Indoor, Outdoor
    action: DS.attr('boolean'),
    sport: DS.attr('boolean'),
    suitabilities: DS.hasMany('suitability', { async: true }),  // Suitabilities
    langs: DS.hasMany('language', { async: true }),             // Language
    costs: DS.hasMany('cost', { async: true }),                 // Costs
    reservation: DS.attr('boolean')
});
