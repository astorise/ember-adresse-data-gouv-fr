import DS from 'ember-data';

export default DS.Model.extend({
  housenumber: DS.attr('number'),
  label: DS.attr('string'),
  postcode: DS.attr('string'),
  citycode: DS.attr('string'),
  city: DS.attr('string'),
  name: DS.attr('string'),
  lat: DS.attr('number'),
  lng: DS.attr('number')
});
