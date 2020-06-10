import React from 'react';
import axios from 'axios';

const Sidebar = (props) => {
  if (!props.submitted) {
    return (
      <div className="sidebar">
        <h2>My Favorites</h2>
        <form onSubmit={(e)=> {props.handleSubmit(e)}}>
          <label>
            Enter your username:
            <input type="text" value={props.username} onChange={(e) => {props.handleChange(e)}} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  } else {
    return (
      <div className="sidebar">
        <h3>Hello, {props.username}!</h3>
        <button>My favorite gifs</button>
        <button>My favorite hikes</button>
      </div>
    )
  }
}

export default Sidebar;