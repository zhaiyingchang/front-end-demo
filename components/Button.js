var React = require('react/addons');
var Button = React.createClass({
  render: function() {
    var cx = React.addons.classSet;
    var classes = cx({
      button: true,
      green: this.props.isGreen,
      pink: this.props.isPink
    });
    return (
      <a href="#" className={classes} >{this.props.text}</a>
      );
  }
});

module.exports = Button;
