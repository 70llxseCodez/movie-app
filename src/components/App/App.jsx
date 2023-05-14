import React from 'react';

import { SwapiService } from '../services/SwapiService';
import Movies from '../Movies';
import './App.css';

export default class App extends React.Component {
  movieDatas = new SwapiService();

  state = {
    data: [],
    error: false,
  };

  gottenError() {
    this.setState({
      error: true,
      data: [],
    });
  }

  componentDidMount() {
    this.movieDatas
      .getAllMovies()
      .then((res) => {
        this.setState({
          data: res,
        });
      })
      .catch(this.gottenError.bind(this));
  }

  render() {
    return (
      <div className="App">
        <Movies error={this.state.error} data={this.state.data} />
      </div>
    );
  }
}
