import React, { Component } from "react";
import "./MoviesItem.css";

export default class MoviesItem extends Component {
  render() {
    const {
      original_title: title,
      overview: description,
      popularity,
      release_date: data,
      backdrop_path: backdrop,
    } = this.props;
    return (
      <div className="movies__item">
        <section>
          <img
            className="movies__item-img"
            src={`https://image.tmdb.org/t/p/original/${backdrop}`}
            alt=""
          />
        </section>
        <section className="movies__item-right">
          <h3>{title}</h3>
          <span className="movies__item-date">{data}</span>
          <div className="movies__item-buttons">
            <button>Action</button>
            <button>Drama</button>
          </div>
          <p>{description}</p>
          <p className="movies__descrition">{popularity}</p>
        </section>
      </div>
    );
  }
}
