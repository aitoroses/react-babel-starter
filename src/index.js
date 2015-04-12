import 'meteor';

import Router from 'react-router';
var {Route, RouteHandler, NotFoundRoute, DefaultRoute} = Router;

import {App, AsteroidTest} from 'components';

var routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={AsteroidTest}/>
  </Route>
)

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.querySelector('#app'));
});
