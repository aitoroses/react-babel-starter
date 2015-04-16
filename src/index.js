import Router from 'react-router';
var {Route, RouteHandler, NotFoundRoute, DefaultRoute} = Router;

import {
  App,
  AsteroidTest,
  TrackerTest,
  TesselTest
} from 'components';

var routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={AsteroidTest}/>
    <Route name="asteroid" path="asteroid" handler={AsteroidTest}/>
    <Route name="tracker" path="tracker" handler={TrackerTest}/>
    <Route name="tessel" path="tessel" handler={TesselTest}/>
  </Route>
)

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.querySelector('#app'));
});
