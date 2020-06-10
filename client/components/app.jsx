import React from 'react';
import axios from 'axios';
import Breathe from './breathe.jsx'
import Smile from './smile.jsx';
import HikeList from './HikeList.jsx';
import Sidebar from './Sidebar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      favoriteDogs: [],
      favoriteHikes: [],
      usernameSubmitted: false
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleUsernameSubmit = this.handleUsernameSubmit.bind(this);
  }

  handleUsernameChange(e) {
    e.preventDefault();
    this.setState({
      username: e.target.value
    });
  }

  handleUsernameSubmit(e) {
    e.preventDefault();
    axios.post('/users', {
      username: this.state.username
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {

      });

    this.setState({
      usernameSubmitted: true
    })
  }

  render() {
    return (
      <div>
        <h1>Self-Care Stop</h1>
        <div className="firstRow">
          <Breathe />
          <Smile username={this.state.username} />
          <Sidebar
            username={this.state.username}
            favoriteDogs={this.state.favoriteDogs}
            handleChange={this.handleUsernameChange}
            handleSubmit={this.handleUsernameSubmit}
            submitted={this.state.usernameSubmitted}
          />
      </div>
        <HikeList />
      </div>
    )
  }
}

export default App;