import Ember from 'ember';

var converter = new Showdown.converter();

export function renderMarkdown(text) {
  // Kind of a gross kludge, but we need to keep the markdown converter from clobbering
  //   anything inside MathJax tags (like X^*)
  text = text.replace(/\$(.*?)\$/g, '<mathjax data-contents="$1"></mathjax>');
  text = converter.makeHtml(text);
  text = text.replace(/<mathjax data-contents="(.*?)"><\/mathjax>/g, function(match, jax) {
    return '$' + jax + '$';
  });

  return new Handlebars.SafeString(text);
}

export default Ember.Handlebars.makeBoundHelper(renderMarkdown);
