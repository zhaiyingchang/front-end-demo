var React = require('react');
var Videos = require('./Videos.js');
var Runners = require('./Runners.js');
var Slides = require('./Slides.js');


var App = React.createClass({
  render: function() {
    return (
      <div>
        <Slides />
        <Videos />
        <Runners />
      </div>
    );
  }
});

module.exports = App;
