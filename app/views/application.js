import Ember from 'ember';

export default Ember.View.extend({
  modelDidChange: function() {
    alert('changed');
  }.observes('controller.title')
});
