import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('spaces');
  this.resource('space', { path: '/spaces/:space_id' });

  this.resource('properties');
  this.resource('property', { path: '/property/:property_id' });
  this.route('search');
});

export default Router;
