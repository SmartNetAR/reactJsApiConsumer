import React, { Component } from 'react';
import MovieList from './MovieList';
import MovieRow from './MovieRow';

class Content extends Component {
  constructor() {
    super();
    this.state = { movies: [] }
    this.getInfoMovie = this.getInfoMovie.bind(this);
    
  }
  getInfoMovie() {
    let url = 'http://www.omdbapi.com/?apikey=' + 
    this.props.authapikey + '&t=' + this.props.search;
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((movies) => {
        this.setState({ movies: movies })
      })
  }

  // componentWillMount() {
  //   this.getInfoMovie();
  // }


  render() {
    const {search} = this.props;
    this.getInfoMovie();
    // if (this.state.movies.title == this.props.search) {
      return (
        <div>
          {/* <h1>{search}</h1> */}
         <MovieRow key={ this.state.movies.id }
          title={ this.state.movies.Title }
          year={ this.state.movies.Year }
          runtime={ this.state.movies.Runtime }
          genre={ this.state.movies.Genre } />
        </div>
      )
    // }else {
    //   return <p className="text-center">Loading movies...({this.state.movies.title} / {this.props.search}) {this.url}</p>
  }
}

export default Content;