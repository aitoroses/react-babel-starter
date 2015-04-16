import Tessel from 'tessel';

// State can be asynchronously requested
var AppState = new Tessel({
  options: ["Monkey", "Gorila", "Giraffe"]
});

/**
 * Main Component
 */
class TesselTest extends React.Component {

  state = {
    cursor: {options:[]}
  }

  componentDidMount() {
    Tessel.autorun(() => {
      /**
        Autorun gets executed once, and reactively
        when state get's changed, autorun runs again
        this way we can link tessel with the state
      */
      this.setState({cursor: AppState.get()})
    });
  }

  render() {
    return (
      <ListComponent listCursor={this.state.cursor.options} />
    )
  }
}

/**
 * Render a list
 */
class ListComponent extends React.Component {

 static propTypes = {
    listCursor: React.PropTypes.array.isRequired
 }

  /**
   * At this point we are not modifying the props
   * since we are using immutable data structure
   * it will notify for an update to the tree
   * and autorun will run again and get a new cursor.
   */
  _handleAdd(e) {
    var node = React.findDOMNode(this.refs.input)
    this.props.listCursor.push(node.value);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.listCursor.map( el => <li key={Math.random()}>{el}</li> )}
        </ul>
        <input ref="input"/>
        <button onClick={this._handleAdd.bind(this)}>Add</button>
      </div>
    )
  }
}

export default TesselTest;
