import React, { Component } from 'react';
import MovieList from './MovieList';
import MovieRow from './MovieRow';


class Content extends Component {
    
  constructor(props) {
    super(props);
    this.state = { 
      search: '',
      movies: {},
      moviesArray: [],
     }
    
    this.getInfoMovie = this.getInfoMovie.bind(this);
    // this.getListSearchMovie = this.getListSearchMovie.bind(this);
    this.find = this.find.bind(this);
    // this.props.listadoPelis = [];
  }
  
  getInfoMovie() {
    // let url = 'http://www.omdbapi.com/?apikey=' + 
    // this.props.authapikey + '&t=' + this.props.search;
    // fetch(url)
    //   .then((response) => {
    //     return response.json()
    //   })
    //   .then((movies) => {
    //     this.setState({ movies: movies })
    //   })
  }

  // getListSearchMovie() {
  //   let url = 'http://www.omdbapi.com/?apikey=' + 
  //   this.props.authapikey + '&s=' + this.props.search;
  //   fetch(url)
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((movies) => {
  //       console.log(movies);
  //       this.setState({ moviesArray: movies.Search });
  //       console.log(this.state.moviesArray);
  //     })
  // }


  find() {
    if (this.props.search != this.state.search   ) {
      // alert('props = ' + this.props.search + ", state " + this.state.search)
      let url = 'http://www.omdbapi.com/?apikey=' + 
      this.props.authapikey + '&s=' + this.props.search;
      fetch(url)
        .then((response) => {
          return response.json()
        })
        .then((movies) => {
          this.setState ({ 
            moviesArray: movies.Search,
            search: this.props.search
          }) ;
        })
    }
  }

  render() {
    this.find();
    // this.getListSearchMovie();
    // if (this.state.movies.title == this.props.search) {
      if (this.state.moviesArray.length > 0) {
      return (
        
        <div>
          {/* <h1>Searching {this.props.search}</h1> */}
          <MovieList listado={this.state.moviesArray} />

          {/* <MovieRow key={ this.state.movies.id }
          title={ this.state.movies.Title }
          year={ this.state.movies.Year }
          runtime={ this.state.movies.Runtime }
          genre={ this.state.movies.Genre } /> */}
        </div>
      )
    } else {
      return (
        <div>
          <p className="text-center">Loading movies...</p> 
        </div>
      )
    }
    // }else {
    //   return <p className="text-center">Loading movies...({this.state.movies.title} / {this.props.search}) {this.url}</p>
  }
}

export default Content;