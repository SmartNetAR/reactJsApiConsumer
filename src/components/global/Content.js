import React, { Component } from 'react';
import MovieList from './MovieList';
import MovieRow from './MovieRow';
// import logo from './media/logo.png';
// import './css/Header.css';

class Content extends Component {
  constructor() {
    super();
      this.state = { movies: [] }
    // this.handleClickLogo = this.handleClickLogo.bind(this);
  }

  componentWillMount() {
    // fetch('http://www.omdbapi.com/?apikey=' + this.props.authapikey + '&t=batman')
    //   .then((response) => {
    //     return response.json()
    //   })
    //   .then((movies) => {
    //     this.setState({ movies: movies })
    //   })
  }

  render() {
    // if (this.state.movies == []) {
      return (
        <div>
          <h1>{this.props.search}</h1>
         <MovieRow key={ this.state.movies.id }
          title={ this.state.movies.Title }
          year={ this.state.movies.Year }
          runtime={ this.state.movies.Runtime }
          genre={ this.state.movies.Genre } />
        </div>
      )
    // }else {
      // return <p className="text-center">Loading movies...</p>
    // }

    // }
    // const {logoHideBar} = this.props;
    }
}

export default Content;