import React from 'react';
import axios from 'axios';
import HikeItem from './HikeItem.jsx';

class HikeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      lat: null,
      lon: null,
      nearbyHikes: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getHikes = this.getHikes.bind(this);
  }

    getHikes() {
      axios.get(`/hikes/${this.state.lon}&${this.state.lat}`)
        .then((response) => {
          this.setState({
            nearbyHikes: response.data
          });
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {

        });
    }

  handleChange (e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit (e) {
    e.preventDefault();
    this.getHikes();
    this.setState({
      submitted: true
    })
  }

  render() {
    if (this.state.submitted) {
      return (
        <div>
          <h2>Enjoy Nature</h2>
          <div className="wrapHikes">
            {this.state.nearbyHikes.map(hike => {
              return <HikeItem hike={ hike }/>
            })}
          </div>
          <h3>Get hikes in a new location:</h3>
          <form onSubmit={this.handleSubmit}>
            <label>
              Longitude:
              <input type="number" value={this.state.lon} onChange={this.handleChange} name="lon" />
            </label>
            <label>
              Latitude:
              <input type="number" value={this.state.lat} onChange={this.handleChange} name="lat" />
            </label>
            <input type="submit" value="Get nearby hikes" />
          </form>
        </div>
      )
    } else {
      return (
        <div>
          <h2>Enjoy Nature</h2>
          <h3>Enter your coordinates to find hikes near you!</h3>
          <form onSubmit={this.handleSubmit}>
            <label>
              Longitude:
              <input type="text" value={this.state.lon} onChange={this.handleChange} name="lon" />
            </label>
            <label>
              Latitude:
              <input type="text" value={this.state.lat} onChange={this.handleChange} name="lat" />
            </label>
            <input type="submit" value="Get nearby hikes" />
          </form>
        </div>
      )
    }
  }
}

export default HikeList;