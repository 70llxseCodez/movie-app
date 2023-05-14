import React from 'react';

export class SwapiService extends React.Component {
  getAllMovies = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/discover/movie?include_video=false&include_video=false&api_key=4b027d63111323a4b09200093f90c90a&page=1'
    );
    if (!response.ok) {
      throw new Error('status isn"t ok');
    }
    const data = await response.json();
    return data.results;
  };
}
