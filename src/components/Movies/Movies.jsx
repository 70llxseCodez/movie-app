import React, { Component } from 'react';
import { Offline, Online } from 'react-detect-offline';

import MoviesItem from '../MoviesItem';
import './Movies.css';
import MyLoader from '../Loader';
import Error from '../Error';

export default class Movies extends Component {
  render() {
    const { data, error } = this.props;
    if (error) {
      return <Error />;
    }
    return (
      <div className="container">
        <Offline>Only shown offline (surprise!) 🫤</Offline>
        <Online>
          <section className="movies">
            {data.length ? (
              data.map((item) => {
                return <MoviesItem key={item.id} {...item} />;
              })
            ) : (
              <MyLoader />
            )}
          </section>
        </Online>
      </div>
    );
  }
}
