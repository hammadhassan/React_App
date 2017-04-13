var React = require("react");

// var WeatherMessage = React.createClass({
//   //var {temp, location} = this.props;
//   render: function () {
//     return (
//       <h3>It's {this.props.temp} Deg in {this.props.location}.</h3>
//     );
//   }
// });

var WeatherMessage = ({temp, location}) => {
  return (
    <h3>It's {temp} Deg in {location}.</h3>
  )
};
module.exports = WeatherMessage;
