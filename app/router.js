import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('nav-menu')
  this.route('nested-routes', function() {
    this.route('first', { path: '/:first' }, function() {
      this.route('second', { path: '/:second' });
    });
  });
});
