import Ember from 'ember';

export default Ember.Controller.extend({
  runMathJax: function() {
    Ember.run.next(this, function() {
      MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    });
  }.observes('currentPath')
});
