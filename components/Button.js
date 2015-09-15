var React = require('react');
var Button = React.createClass({
  render: function() {
    return (
      <a href="#" className="button green" >{this.props.text}</a>
      );
  }
});

module.exports = Button;
