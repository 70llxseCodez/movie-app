import React, { Component } from 'react';

import MoviesItem from '../MoviesItem';
import PaginationComp from '../Pagination';
import './Movies.css';
import MyLoader from '../Loader';
import Error from '../Error';
import Search from '../Search';
import WarningAlert from '../WarningAlert';
import Tab from '../Tabs';
import Rate from '../Rate';

export default class Movies extends Component {
  render() {
    const { data, error, currentPage, onChange, getInSearchItem, tabTheTabs, tabs, postRate, guestId, ratedData } =
      this.props;
    if (error) {
      return <Error />;
    }

    const dataWithLoading = data ? (
      data.map((item) => <MoviesItem key={item.id} {...item} postRate={postRate} guestId={guestId} />)
    ) : (
      <MyLoader />
    );

    return (
      <div className="container">
        <Tab tabTheTabs={tabTheTabs} />
        {tabs === 'Search' ? <Search getInSearchItem={getInSearchItem} /> : null}
        {data !== null && data.length === 0 ? <WarningAlert /> : null}
        <section className="movies">{tabs === 'Search' ? dataWithLoading : <Rate ratedData={ratedData} />}</section>
        <PaginationComp currentPage={currentPage} onChange={onChange} />
      </div>
    );
  }
}
