import Tracker from 'packages/tracker';
import ReactiveDict from 'packages/reactive-dict';

window.Tracker = Tracker

// Create a reactive dictionary
var dict = new ReactiveDict();
dict.set('text', "Hello world");


// Get a global reference
window.dict = dict;

class TrackerTest extends React.Component {

  constructor() {
    super();
    this.state = {
      text: dict.get('text')
    }
  }

  componentDidMount() {
    // Setup a computation
    this._computation = Tracker.autorun(() => {
      this.setState({
        text: dict.get('text')
      });
    });
  }

  componentWillUnmount() {
    this._computation.stop();
  }

  render() {
    return (
      <div>
        <p>Open the console and type: dict.set('text', "whatever")</p>
        <p>{this.state.text}</p>
      </div>
    )
  }
}

export default TrackerTest;
