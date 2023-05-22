import { Pagination } from 'antd';
import React, { Component } from 'react';

export default class PaginationComp extends Component {
  render() {
    const { onChange, currentPage } = this.props;
    return (
      <section style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}>
        <Pagination current={currentPage} pageSizeOptions={[10]} onChange={onChange} total={2000} />
      </section>
    );
  }
}
