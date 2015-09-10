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
React.render(<App/>, document.getElementById('app'));
