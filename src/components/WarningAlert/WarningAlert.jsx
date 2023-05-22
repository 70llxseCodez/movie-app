import { Alert } from 'antd';
import React, { Component } from 'react';

export default class WarningAlert extends Component {
  render() {
    return <Alert message="Not found what you seach" type="warning" showIcon />;
  }
}
