var React = require('react');

// var WeatherMessage = React.createClass({
//
//   render:function(){
//     var {location, temp} = this.props;
//
//     return (
//       <p>Temperature is {temp} in {location}</p>
//     )
//   }
// });
var WeatherMessage = ({location, temp}) => {
  //var {location, temp} = props;

  return (
    <h4 className="text-center">Temperature is {temp} in {location}</h4>
  )
};

module.exports = WeatherMessage;
