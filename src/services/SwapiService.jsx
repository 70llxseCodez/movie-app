import React from 'react';

export class SwapiService extends React.Component {
  getAllMovies = async (pageNumber) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=4b027d63111323a4b09200093f90c90a&page=${pageNumber}`
    );
    if (!response.ok) {
      throw new Error('status isn"t ok');
    }
    const data = await response.json();
    return data.results;
  };
  postRate = async (movieId, rate, guestId) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=4b027d63111323a4b09200093f90c90a&guest_session_id=${guestId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          value: rate,
        }),
      }
    );
    if (!res.ok) {
      console.log('status isn"t set stars');
    }
    const dataStatus = await res.json();
    return dataStatus;
  };

  generatorGuestId = async () => {
    const res = await fetch(
      'https://api.themoviedb.org/3/authentication/guest_session/new?api_key=4b027d63111323a4b09200093f90c90a'
    );
    if (!res.ok) {
      throw new Error('status isn"t ok from generator id');
    }
    const data = await res.json();
    return data.guest_session_id;
  };

  getRateMovies = async () => {
    const guestId = localStorage.getItem('guestId');
    if (!guestId) return;
    const res = await fetch(
      `https://api.themoviedb.org/3/guest_session/${guestId}/rated/movies?api_key=4b027d63111323a4b09200093f90c90a`
    );
    if (!res.ok) {
      throw new Error('status isn"t ok from get rated movies');
    }
    const data = await res.json();
    return data.results;
  };
  getGenre = async () => {
    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=4b027d63111323a4b09200093f90c90a');
    if (!res.ok) {
      throw new Error('status isn"t ok from get rated movies');
    }
    const data = await res.json();
    return data.genres;
  };

  searchMovie = async (movieName = '') => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=4b027d63111323a4b09200093f90c90a&page=1`
    );
    const data = await response.json();
    return data.results;
  };
}

//https://api.themoviedb.org/3/guest_session/06c6a6196d8e9ef0d559f3c2e3f2de4e/rated/movies?api_key=4b027d63111323a4b09200093f90c90a
