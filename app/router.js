import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('today');
  this.route('random');
  this.route('login');
  this.route('register');
  this.route('imprint');
  this.route('dataprotection');
  this.route('disclaimer');
  this.route('activity', { path: '/activity/:activity_id' });
  this.route('activities');
});

export default Router;
