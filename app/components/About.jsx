var React = require ('react');

// var About = React.createClass ({
//   render: function(){
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

//stateless functional component
var About = (props) => {
  return (
         <div>
           <h1 className="text-center">About</h1>
           <p>Welcome to React Weather App. This is built on react. Ive followed the React developer course.</p>
           <p>Here are some of the tools i have used:</p>
           <ul>
             <li><a href="https://facebook.com">React</a>- The react framework i used</li>
             <li><a href="http://github.com">Github</a>- Github to manage my code</li>
           </ul>

         </div>
       )
};

module.exports = About;
