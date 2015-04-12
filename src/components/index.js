var componentContext = require.context('./', false, /\.jsx/);
var components = componentContext.keys().reduce((acc, c) => {
  var comp = componentContext(c);
  acc[comp.name] = comp;
  return acc;
}, {});

export default components;
