import React, { Component } from 'react';
import MovieList from './MovieList';
// import logo from './media/logo.png';
// import './css/Header.css';

class Content extends Component {
  constructor() {
    super();
      this.state = { movies: [] }
    let apikey = 'f4fea2a9';
    // this.handleClickLogo = this.handleClickLogo.bind(this);
  }

  componentWillMount() {
    fetch('http://www.omdbapi.com/?apikey=f4fea2a9&t=batman')
      .then((response) => {
        return response.json()
      })
      .then((movies) => {
        this.setState({ movies: movies })
      })
  }

  render() {
    // if (this.state.movies.length > 0) {
      return (
        <div className="container-fluid">
          {this.state.movies.Title}
          {/* <MovieList listado={this.state.movies} /> */}
        </div>
      )
    // } else {
      // return <p className="text-center">Loading movies...</p>
    // }
    // const {logoHideBar} = this.props;
    }
}

export default Content;