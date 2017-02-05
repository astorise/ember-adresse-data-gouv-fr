import Ember from 'ember';
export default Ember.Route.extend({
  model: function(params) {
      console.log(params.adresse_id);
    return this.store.findRecord('adresse', params.adresse_id);
  }
});