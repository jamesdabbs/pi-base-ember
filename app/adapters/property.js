import Resource from './resource';

var PropertyAdapter = new Resource({
  endpoint: 'properties',
  normalize: function(p) {
    return {
      id: p.id,
      name: p.name,
      description: p.description
    };
  }
});

export default PropertyAdapter;
