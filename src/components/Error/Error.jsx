import React, { Component } from 'react';
import { Alert, Space } from 'antd';

export default class Error extends Component {
  render() {
    return (
      <div className="container">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Alert description="Error from api" type="error" showIcon />
        </Space>
      </div>
    );
  }
}
