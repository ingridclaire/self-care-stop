import React from 'react';

const HikeItem = (props) => {
  return (
    <div className="hikeItem">
      <img src={props.hike.imgSmallMed}></img>
      <h3>{props.hike.name}</h3>
      <p>Location: {props.hike.location}</p>
      <p>Distance: {props.hike.length}</p>
      <p>Summary: {props.hike.summary}</p>
    </div>
  )
}

export default HikeItem;