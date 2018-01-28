import DS from 'ember-data';

export default DS.Model.extend({
    languageFamily: DS.attr('string'),
    isoLanguageName: DS.attr('string'),
    code1: DS.attr('string'),
    code2T: DS.attr('string'),
    code2B: DS.attr('string'),
    code3: DS.attr('string'),
    activity: DS.belongsTo('activity', { async: true, inverse: null })
});
