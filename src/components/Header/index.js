var React = require('react');
var Avatar = require('./Avatar.js');
var Social = require('./Social.js');
var Header = React.createClass({
  render: function() {
    return (
      <header>
        <Avatar />
        <Social />
      </header>
    );
  }
});

module.exports = Header;