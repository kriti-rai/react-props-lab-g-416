import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Spaceship extends Component {
  render() {
    return (
      <div>
        <h1>{ this.props.name }</h1>
        <p>Speed: { this.props.speed }</p>
        <p># of Rockets: { this.props.hasRockets ? 'True': 'False'} </p>
        <p>Colors:{ this.props.colors.join(', ') }</p>
      </div>
    )
  }
};

Spaceship.defaultProps = {
  name: "Anonymous",
  speed: '3.6 x 10 ^6 m/s',
  hasRockets: false,
  colors: ["blue", "black"]
}
