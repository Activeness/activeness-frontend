import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  street: DS.attr('string'),
  houseNo: DS.attr('string'),
  zip: DS.attr('string'),
  city: DS.attr('string'),
  companyName: DS.attr('string'),
  postOfficeBox: DS.attr('string'),
  country: DS.attr('string'),
  countryCode: DS.attr('string'),
  language: DS.attr('string'),
  latitude: DS.attr('string'),
  longitude: DS.attr('string'),
  contacts: DS.hasMany('contact', { async: true })    // Contacts
});
