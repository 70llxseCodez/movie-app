import React, { Component } from 'react';
import './MoviesItem.css';
import { format } from 'date-fns';

export default class MoviesItem extends Component {
  _apiImage = 'https://image.tmdb.org/t/p/original';
  toSortDesc = () => {
    const toArr = this.props.overview.substr(0, 110);
    return toArr;
  };
  render() {
    const { original_title: title, popularity, release_date: date, backdrop_path: backdrop } = this.props;
    const dateRelised = format(new Date(date), 'MMMM M, yyyy');
    return (
      <div className="movies__item">
        <section>
          <img className="movies__item-img" src={this._apiImage + `${backdrop}`} alt="backdrop" />
        </section>
        <section className="movies__item-right">
          <h3>{title}</h3>
          <span className="movies__item-date">{dateRelised}</span>
          <div className="movies__item-buttons">
            <button>Action</button>
            <button>Drama</button>
          </div>
          <p>{popularity}</p>
          <p className="movies__descrition">{this.toSortDesc()}...</p>
        </section>
      </div>
    );
  }
}
