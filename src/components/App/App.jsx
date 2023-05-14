import React from 'react';

import { SwapiService } from '../services/SwapiService';
import Movies from '../Movies';
import './App.css';

export default class App extends React.Component {
  movieDatas = new SwapiService();

  state = {
    data: [],
  };

  componentDidMount() {
    this.movieDatas.getAllMovies().then(
      (res) => {
        this.setState({
          data: res.slice(0, 10),
        });
      },
      (err) => {
        console.log(err, 'from getting Data');
        this.setState({
          data: [],
        });
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Movies data={this.state.data} />
      </div>
    );
  }
}
