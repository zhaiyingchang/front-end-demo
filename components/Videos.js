var Videos = React.createClass({
  render: function() {
    return (

      <div className="videos clearfix">
        <h2 className="title">最大的跑酷平台</h2>
        <p className="desc">这里汇集了中国第一流的顶尖跑酷选手</p>
        <a href className="visit">精彩视频</a>
      </div>
    );
  }
});
React.render(<Videos/>, document.getElementById('videos'));
