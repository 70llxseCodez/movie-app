import React, { Component } from "react";

import MoviesItem from "../MoviesItem";
import "./Movies.css";

export default class Movies extends Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div className="container">
        <section className="movies">
          {data.length ? (
            data.map((item) => {
              return <MoviesItem key={item.id} {...item} />;
            })
          ) : (
            <h1>loading</h1>
          )}
        </section>
      </div>
    );
  }
}
