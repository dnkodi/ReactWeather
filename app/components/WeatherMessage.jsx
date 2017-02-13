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
    <p>Temperature is {temp} in {location}</p>
  )
};

module.exports = WeatherMessage;
