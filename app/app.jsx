var React = require("react");
var ReactDOM = require("react-DOM");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var Main = require("Main");
var Weather = require("Weather");
var About = require("About");
var Example = require("Example");

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="example" component={Example}/>
        <IndexRoute component={Weather}/>
      </Route>
    </Router>,
    document.getElementById("jsx")
);
