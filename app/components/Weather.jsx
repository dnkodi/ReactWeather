var React = require ('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass ({
  getInitialState: function(){
    return {
      isLoading: false
      // location: 'Negombo',
      // temp: 45
    }
  },
  handleSearch: function(location){
    var that = this;
    //debugger;
    this.setState({isLoading:true});

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp:temp,
        isLoading: false,
      });
    }, function(errMessage){
      that.setState({isLoading:false});
      alert(errMessage);

    });

    // this.setState({
    //   location:location,
    //   temp:23
    // });
  },
  render: function(){
    var {isLoading, location, temp} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center">Fetching weather...</h3>;
      }else if(location, temp){
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
