import Ember from 'ember';

export function previewDescription(input) {
  // TODO: this should respect latex boundaries
  var p = input.split('\n')[0];
  var words = p.split(' ');
  if (words.length >= 30) {
    return words.slice(0, 29).join(' ') + ' ...';
  } else {
    return p;
  }
}

export default Ember.Handlebars.makeBoundHelper(previewDescription);
