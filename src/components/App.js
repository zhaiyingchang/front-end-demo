var React = require('react');
var Header = require('./Header/index.js');
var Videos = require('./Videos.js');
var Runners = require('./Runners.js');
var Slides = require('./Slides.js');


var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Slides />
        <Videos />
        <Runners />
      </div>
    );
  }
});

module.exports = App;
