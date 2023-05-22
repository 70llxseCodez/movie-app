import React, { Component } from 'react';
import './CyrcleRate.css';

export default class CyrcleRate extends Component {
  generateColor = () => {
    const { vote } = this.props;
    if (vote <= 3) {
      return '#E90000';
    } else if (vote <= 5) {
      return '#E97E00';
    } else if (vote <= 7) {
      return '#E9D100';
    } else {
      return '#66E900';
    }
  };
  render() {
    const { vote } = this.props;
    const color = this.generateColor();
    return (
      <span style={{ border: `3px solid ${color}`, borderRadius: '50%', padding: '7px 0' }} className="Cyrcle">
        <span>{vote.toFixed(1)}</span>
      </span>
    );
  }
}
