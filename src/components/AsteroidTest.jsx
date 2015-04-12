import {usersQuery} from 'meteor';

class AsteroidTest extends React.Component {

  constructor() {
    super()
    this.state = {users: usersQuery.result};
  }

  componentDidMount() {
    usersQuery.on('change', (id) => {
      console.log("users recieved");
      this.updateUsers();
    });
  }

  updateUsers() {
    this.setState({users: usersQuery.result});
  }

  renderUser(user) {
    return (
      <li key={user._id}>{JSON.stringify(user)}</li>
    )
  }

  render() {
    return (
      <ul>
        {this.state.users.map(u => this.renderUser(u))}
      </ul>
    )
  }
}

export default AsteroidTest;
