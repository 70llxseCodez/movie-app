import { Rate } from 'antd';
import React, { Component } from 'react';
import { format } from 'date-fns';

import CyrcleRate from '../CyrcleRate/CyrcleRate';
import Genre from '../GeneratorsGenre/Genre';

export default class RateItem extends Component {
  _apiImage = 'https://image.tmdb.org/t/p//w300';
  render() {
    const {
      backdrop_path: backdrop,
      rating,
      release_date: date,
      original_title: title,
      vote_average: vote,
      genre_ids: genres,
    } = this.props;
    const imgUrl = this._apiImage + backdrop;
    const dateRelised = date ? format(new Date(date), 'MMMM M, yyyy') : <i>no date</i>;
    return (
      <div className="movies__item">
        <section>
          <img className="movies__item-img" src={imgUrl} alt="backdrop" />
        </section>
        <section className="movies__item-right">
          <h3>{title}</h3>
          <span className="movies__item-date">{dateRelised}</span>
          <div className="movies__item-buttons">
            <Genre genresId={genres} />
          </div>
          <CyrcleRate vote={vote} />
          <Rate allowHalf defaultValue={rating} count={7} disabled />
        </section>
      </div>
    );
  }
}
