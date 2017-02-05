import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({


  /**
    @method _normalizeResponse
    @param {DS.Store} store
    @param {DS.Model} primaryModelClass
    @param {Object} payload
    @param {String|Number} id
    @param {String} requestType
    @param {Boolean} isSingle
    @return {Object} JSON-API Document
    @private
  */
  _normalizeResponse(store, primaryModelClass, payload, id, requestType, isSingle){ 
  if(isSingle){
    return {data: this._normalizeDocumentHelper(payload).data[0]};
  } 
    return this._normalizeDocumentHelper(payload);
  },
    /**
       @method _normalizeDocumentHelper
       @param {Object} documentHash
       @return {Object}
       @private
     */
    _normalizeDocumentHelper: function _normalizeDocumentHelper(documentHash) {
        return { data: documentHash.features.map(this._deserialiseAdresse) };
    },

    /**
       @method _normalizeDocumentHelper
       @param {Object} adresseHash
       @return {Object}
       @private
     */
    _deserialiseAdresse: function _deserialiseAdress(adresseHash) {
        return {
            "type": "adresse",
            "id": adresseHash.geometry.coordinates.toString(),
            "attributes": {
                "housenumber": adresseHash.properties.housenumber,
                "label": adresseHash.properties.label,
                "postcode": adresseHash.properties.postcode,
                "citycode": adresseHash.properties.citycode,
                "city": adresseHash.properties.city,
                "name": adresseHash.properties.name,
                "coordinates": adresseHash.geometry.coodinates
            }
        };
    }

});
