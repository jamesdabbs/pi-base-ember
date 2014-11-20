import PagedRoute from './paged-route';

export default PagedRoute.extend({
  model: function(params) {
    return this.findPaged('space', params);
  }
});
