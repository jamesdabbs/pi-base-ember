import Ember from 'ember';
import DS from 'ember-data';

export default function(opts) {
  var endpoint = 'http://localhost:3000/v1/' + opts.endpoint;

  var ajax = function(url, opts) {
    return Ember.$.ajax(url, Ember.$.extend({
      dataType: 'json',
      headers: { 'Authorization': 'admin' } // FIXME
    }, opts));
  };

  return DS.Adapter.extend({
    findAll: function() {
      return ajax(endpoint).then(function(json) {
        return json.map(opts.normalize);
      });
    },

    find: function(store, type, id) {
      return ajax(endpoint + '/' + id).then(opts.normalize);
    },

    createRecord: function(store, type, record) {
      return ajax(endpoint, {
        type: 'POST',
        data: record.toJSON(),
      }).then(function(json) {
        console.log('create response', json);
        return json;
      });
    }
  });
}
