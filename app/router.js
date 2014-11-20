import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('spaces');
  this.resource('space', { path: '/spaces/:space_id' });
});

export default Router;
