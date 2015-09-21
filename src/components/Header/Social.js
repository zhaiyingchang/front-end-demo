var React = require('react');
var Isvg = require('react-inlinesvg');
var Social = React.createClass({
  render: function() {
    return (
      <div className="social">
        <Isvg className="twitter" src="images/twitter.svg"> </Isvg>
        <Isvg className="github" src="images/github.svg"> </Isvg>
        <Isvg className="weibo" src="images/weibo.svg"> </Isvg>
      </div>
    );
  }
});

module.exports = Social;



