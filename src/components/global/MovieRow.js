import React from 'react'

class MovieRow extends React.Component {

  render() {
    return(
      <li className="media">
        {/* <MovieAvatar picture={this.props.picture} /> */}
        <div className="media-body">
          <h4>{this.props.title}</h4>
          <p>
            {this.props.year} &nbsp;
            <span className="label label-info">{this.props.runtime}</span> &nbsp;
            <span className="label label-info">{this.props.genre}</span>
          </p>
        </div>
        <hr/>
      </li>
    )
  }
}

export default MovieRow