import jquery     from 'jquery';
import angular    from 'angular';
import resource   from 'angular-resource';
import animate    from 'angular-animate';
import uib        from 'angular-ui-bootstrap';
import main       from './index.html';
import components from './components';
import './scss/main.scss';
const app = angular.module('myApp', [animate, resource, uib]);

components(app);

/**
 * Insert top-level template main.html and bootstrap the app
 */
document.body.innerHTML = main;
angular.bootstrap(document, [app.name], {});
