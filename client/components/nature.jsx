import React from 'react';

class Nature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: "https://cdn2.apstatic.com/photos/hike/7010537_smallMed_1554398709.jpg",
      name: "Bishop Peak Trail",
      distance: '1.7mi',
      summary: "Head to the Highland Avenue trailhead for this classic San Luis Obispo hike."
    }
  }
  render() {
    return (
      <div>
        <h2>Enjoy Nature</h2>
        <img src={this.state.pic}></img>
        <h3>{this.state.name}</h3>
        <p>Distance: {this.state.distance}</p>
        <p>Summary: {this.state.summary}</p>
      </div>
    )
  }
}

export default Nature;