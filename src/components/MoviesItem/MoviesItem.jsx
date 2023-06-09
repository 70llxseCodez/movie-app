import React, { Component } from 'react';
import { format } from 'date-fns';
import { Rate } from 'antd';

import './MoviesItem.css';
import CyrcleRate from '../CyrcleRate/CyrcleRate';
import Genre from '../GeneratorsGenre/Genre';
import { SwapiService } from '../../services/SwapiService';

export default class MoviesItem extends Component {
  movieDatas = new SwapiService();

  _apiImage = 'https://image.tmdb.org/t/p//w300';
  toSortDesc = () => {
    const toArr = this.props.overview.substr(0, 110);
    return toArr;
  };

  setStar = (rate) => {
    const { id, guestId, postRate } = this.props;
    postRate(id, rate, guestId);
  };
  render() {
    const {
      original_title: title,
      popularity,
      release_date: date,
      backdrop_path: backdrop,
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
          <p>{popularity}</p>
          <p className="movies__descrition">{this.toSortDesc()}...</p>
          <Rate allowHalf defaultValue={0} count={7} onChange={this.setStar} />
        </section>
      </div>
    );
  }
}
