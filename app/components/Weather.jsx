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
    //alert(location);
    var that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
      });
      openWeatherMap.getTemp(location).then(function (temp) {
        that.setState({
          location: location,
          temp: temp,
          isLoading: false
        });
      }, function (e) {
        that.setState({
          isLoading: false,
          errorMessage: e.message
        });
        alert(errorMessage);
      });
    },
    componentDidMount: function () {
      var location = this.props.location.query.location;

      if (location && location.length > 0) {
        this.handleSearch(location);
        windows.location.hash = "#/";
      }
    },
    componentWillReceiveProps: function (newProps) {
      var location = newProps.location.query.location;

      if (location && location.length > 0) {
        this.handleSearch(location);
        windows.location.hash = "#/";
      }
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
        <h1 className="text=center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
