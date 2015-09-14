var React = require('react');
var SearchButton = require("./SearchButton.js");
var Slides = React.createClass({
  render: function() {
    return (
      <div className="slides clearfix">
        <SearchButton />
      </div>
      );
  }
});

module.exports = Slides;