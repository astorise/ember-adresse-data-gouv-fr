
import { moduleFor, test } from 'ember-qunit';


moduleFor('adapter:adresse', 'Unit | Adapter | adresse', {

});

test( 'urlForQuery', function( assert ) {
var adapter = this.subject();
var query = {
    label:'38 rue de lac'
};
    assert.equal(adapter.urlForQuery(query,'adresse'),'https://api-adresse.data.gouv.fr/search/?q=38 rue de lac');
});

test( 'urlForFindRecord', function( assert ) {
var adapter = this.subject();
var id='0.652347,44.176653';

    assert.equal(adapter.urlForFindRecord(id, 'adresse', false),'https://api-adresse.data.gouv.fr/reverse/?lon=0.652347&lat=44.176653&type=housenumber');
});




