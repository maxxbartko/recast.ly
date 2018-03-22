class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // initialize state of App to keep track of
        // all videos in list and current video in player
    };
  }

  render() {
    // probably render other stuff

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em> view goes here</h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em> view goes here</h5></div>
          </div>
        </div>
      </div>
    );
  };
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;