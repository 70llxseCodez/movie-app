import { Input } from 'antd';
import React, { Component } from 'react';

import { debounce } from '../../hooks/Debounce';
export default class Search extends Component {
  state = {
    value: '',
  };
  debounceLog = debounce(this.props.getInSearchItem, 500);
  onHandleSearch = (e) => {
    this.setState({
      value: e.target.value,
    });
    this.debounceLog(this.state.value);
  };
  render() {
    const style = { borderRadius: '4px', marginBottom: '32px', fontSize: '16px', padding: '9px 12px' };
    return (
      <Input value={this.state.value} onChange={this.onHandleSearch} style={style} placeholder="Type to search..." />
    );
  }
}
