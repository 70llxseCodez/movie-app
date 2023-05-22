import React, { Component } from 'react';

import MyLoader from '../Loader';

import RateItem from './RateItem';

export default class Rate extends Component {
  render() {
    const { ratedData } = this.props;
    return (
      <>
        {!ratedData ? (
          <MyLoader />
        ) : (
          ratedData.map((item) => {
            return <RateItem key={item.id} {...item} />;
          })
        )}
      </>
    );
  }
}
