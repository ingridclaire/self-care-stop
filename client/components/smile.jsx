import React from 'react';

class Smile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifUrl: "https://cdn2.thedogapi.com/images/BJZlTPpVX.gif"
    }
  }
  render() {
    return (
      <div>
        <h2>Smile and Laugh</h2>
        <img src={this.state.gifUrl}></img>
      </div>
    )
  }
}
export default Smile;