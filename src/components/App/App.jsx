import React from 'react';

import { SwapiService } from '../../services/SwapiService';
import Movies from '../Movies';
import './App.css';
import NetWorkState from '../NetworkState';

export default class App extends React.Component {
  movieDatas = new SwapiService();

  state = {
    data: null,
    dataRate: null,
    error: false,
    currentPage: 1,
    isOnline: true,
    getDataInSearch: false,
    tab: 'Search',
    guestId: localStorage.getItem('guestId') || '',
    genres: null,
  };

  gottenError = () => {
    this.setState({
      error: true,
      data: null,
    });
  };

  componentDidMount() {
    this.movieDatas.generatorGuestId().then((res) => {
      if (!this.state.guestId) {
        localStorage.setItem('guestId', res);
      }
    });

    this.movieDatas.getRateMovies(this.state.guestId).then((res) => {
      this.setState({
        dataRate: res,
      });
    });

    this.movieDatas
      .getAllMovies(this.state.currentPage)
      .then((res) => {
        this.setState({
          data: res,
        });
      })
      .catch(this.gottenError);

    this.movieDatas.getGenre().then((res) => {
      const gernesInObj =
        res.reduce((acc, item) => {
          if (!acc[item.id]) {
            acc[item.id] = item.name;
          }
          return acc;
        }, {}) || [];
      this.setState({
        genres: gernesInObj,
      });
    });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.tab !== this.state.tab) {
      this.movieDatas.getRateMovies(this.state.guestId).then((res) => {
        this.setState({
          dataRate: res,
        });
      });
    }
  }

  onChange = (page) => {
    this.setState({
      currentPage: page,
      data: null,
    });

    this.movieDatas
      .getAllMovies(page)
      .then((res) => {
        this.setState({
          data: res,
        });
      })
      .catch(this.gottenError);
  };

  onNetwork = (hasNetwork) => {
    this.setState({
      isOnline: hasNetwork,
    });
  };

  getInSearchItem = (nameOfMovie) => {
    this.movieDatas
      .searchMovie(nameOfMovie)
      .then((res) => {
        if (res.length == 0) {
          this.setState({
            getDataInSearch: false,
          });
        }
        this.setState({
          data: res,
        });
      })
      .catch(this.gottenError);
  };

  tabTheTabs = (item) => {
    this.setState({
      tab: item,
    });
  };

  postRateItem = (id, rate, guestId) => {
    this.movieDatas.postRate(id, rate, guestId);
  };

  render() {
    window.ononline = () => {
      this.onNetwork(true);
    };
    window.onoffline = () => {
      this.onNetwork(false);
    };
    const renderFromNetwork = this.state.isOnline ? (
      <Movies
        ratedData={this.state.dataRate}
        postRate={this.postRateItem}
        tabs={this.state.tab}
        tabTheTabs={this.tabTheTabs}
        getInSearchItem={this.getInSearchItem}
        error={this.state.error}
        onChange={this.onChange}
        currentPage={this.state.currentPage}
        data={this.state.data}
        guestId={this.state.guestId}
      />
    ) : (
      <NetWorkState />
    );

    return <div className="App">{renderFromNetwork}</div>;
  }
}
