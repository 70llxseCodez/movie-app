import { Tabs } from 'antd';
import React, { Component } from 'react';

export default class Tab extends Component {
  state = {
    tabs: ['Search', 'Tabs'],
  };
  getTabs = (index) => {
    this.props.tabTheTabs(this.state.tabs[index]);
  };
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Tabs
          onChange={this.getTabs}
          defaultActiveKey="1"
          size={'large'}
          style={{ marginBottom: 15 }}
          items={this.state.tabs.map((item, i) => {
            return {
              key: i,
              label: item,
            };
          })}
        />
      </div>
    );
  }
}
