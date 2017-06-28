var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Anser = require('Anser');
var About = require('About');
var Team = require('Team');
var Examples = require('Examples');

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
//require('style!css!foundation-sites/dist/css/foundation.css')
$(document).foundation();

// App css
require('style!css!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      {/*<Route path="team" component={Team}/>*/}
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Anser}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
