import React from 'react';
import Breathe from './breathe.jsx'
import Smile from './smile.jsx';
import Nature from './nature.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Self-Care Stop</h1>
        <Breathe />
        <Smile />
        <Nature />
      </div>
    )
  }
}

export default App;