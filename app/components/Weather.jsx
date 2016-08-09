const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true
    };
  },
  handleSearch: function(location) {
    var that = this;
    openWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location,
        temp,
        isLoading: false
      });
    }, function(errorMessage) {
      alert(errorMessage);
      that.setState({isLoading: false});
    });
  },
  render: function() {
    var {isLoading, temp, location} = this.state;
    function renderMessge() {
      if (isLoading) {
        return (<h3>Loading weather ... </h3>);
      }
      else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />;
      }
    };
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessge()}
      </div>
    );
  }
});
