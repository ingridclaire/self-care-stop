import React from 'react';

class Breathe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breatheSrc: "https://giphy.com/embed/krP2NRkLqnKEg",
      breatheHref: "https://giphy.com/gifs/help-satisfying-breathe-krP2NRkLqnKEg",
    }
  }
    render() {
      return (
        <div className="breathe">
          <h2>Mindful Breathing</h2>
          <iframe src={this.state.breatheSrc} width="443" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href={this.state.breatheHref}>via GIPHY</a></p>
        </div>
      )
    }
  }

export default Breathe;