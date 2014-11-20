import Resource from './resource';

var SpaceAdapter = new Resource({
  endpoint: 'spaces',
  normalize: function(s) {
    return {
      id:          s.id,
      name:        s.name,
      description: s.description
    };
  }
});

export default SpaceAdapter;
