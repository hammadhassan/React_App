var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var PopUpBox = require("PopUpBox");
var openWeatherMap = require("openWeatherMap");

var Weather = React.createClass({
  getInitialState: function() {
    return {
        isLoading: false,

    }
  },
  handleSearch: function (location) {
    var that = this;
    //alert(location);
    //debugger;
    this.setState({
      isLoading: true,
      errorMessage: undefined
      });

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
      //console.log(location);
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
        });
      alert(errorMessage);
    });
  },
  render: function () {
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text=center">Fetching Weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderError() {
      if (typeof errorMessage === "string") {
        return (
          <PopUpBox message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text=center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
