import React from 'react';
import axios from 'axios';

class Smile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifUrl: ""
    }
    this.handleClick = this.handleClick.bind(this);
    this.getNewDog = this.getNewDog.bind(this);
    this.handleAddDog = this.handleAddDog.bind(this);
  }
  componentDidMount() {
    this.getNewDog();
  }

  getNewDog() {
    axios.get('/dogs')
      .then((response) => {
        this.setState({
          gifUrl: response.data.url
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {

      });
  }

  handleClick () {
    this.getNewDog();
  }

  handleAddDog () {
    axios.post('/favoriteDogs', {
      username: this.props.username,
      url: this.state.gifUrl
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {

      });
  }

  render() {
    return (
      <div className="smile">
        <h2>Smile and Laugh</h2>
        <img src={this.state.gifUrl}></img>
        <button onClick={this.handleClick}>Get another dog</button>
        <button onClick={this.handleAddDog}>Add to favorites</button>
      </div>
    )
  }
}
export default Smile;