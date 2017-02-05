import Ember from 'ember';
export default Ember.Route.extend({
    model:function() {
        return this.store.query('adresse',{label:'38 rue du '});
    }
});