var React = require('react');
var Button = require("./Button.js");
var Slides = React.createClass({
  render: function() {
    return (
      <div className="slides clearfix">
        <Button isGreen={true} text={'Search Hi'}/>
      </div>
      );
  }
});

module.exports = Slides;