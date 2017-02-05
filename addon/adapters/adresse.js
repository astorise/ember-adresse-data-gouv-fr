import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'https://api-adresse.data.gouv.fr/',
   // defaultSerializer:'adresse',
  /**
   Builds a URL for a `store.query(type, query)` call.
   @method urlForQuery
   @param {Object} query
   @param {String} modelName
   @return {String} url
   */
  /*jshint unused:false, eqnull:true */
  urlForQuery(query, modelName) {     
    return `${this.host}search/?q=${query.label}`;
  },

urlForFindRecord(id, modelName, snapshot){
    let coordonate = id.split(',');
    let lon= coordonate[0];
    let lat= coordonate[1];
     return `${this.host}reverse/?lon=${lon}&lat=${lat}&type=housenumber`;
}

});
