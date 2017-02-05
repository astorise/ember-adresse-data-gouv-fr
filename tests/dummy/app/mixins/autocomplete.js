import Ember from 'ember';

export default Ember.Mixin.create({
value : {label:''},
suggestions: Ember.computed('value','value.label',  function() {
      if(this.get('value.label')===''){
return null;
      }
      
    return this.get('store').query('adresse', {
    label: (this.get('value.label'))

});
  })

});