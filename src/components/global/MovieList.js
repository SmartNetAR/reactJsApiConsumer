import React from 'react'
import MovieRow from './MovieRow'
// import EmpleadoRow from '../empleado-row'

class MovieList extends React.Component {

  render() {
    // console.log(this.props.listado);
    // alert("console listado" + this.props.listado);
    return (
        <div className="container-fluid">
        <ul className="media-list">
          {
            this.props.listado.map((movie) => {
              return <MovieRow key={ movie.id }
                                  title={ movie.Title }
                                  year={ movie.year }
                                  runtime={ movie.runtime }
                                  genre={ movie.genre } />
            })
          }
        </ul>
      </div>
    )
  }
}

export default MovieList;