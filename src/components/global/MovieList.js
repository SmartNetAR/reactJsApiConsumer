import React from 'react'
import MovieRow from './MovieRow'
// import EmpleadoRow from '../empleado-row'

class MovieList extends React.Component {

  render() {
    return (
        <div className="container-fluid">
        <ul className="media-list">
          {
            this.props.listado.map((movie) => {
              return <MovieRow key={ movie.id }
                                  name={ movie.name }
                                  picture={ movie.pic }
                                  title={ movie.title }
                                  genere={ movie.genere } />
            })
          }
        </ul>
      </div>
    )
  }
}

export default MovieList;