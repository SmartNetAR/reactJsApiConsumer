import React from 'react'

class MovieRow extends React.Component {

  render() {
    return(
      <li className="media">
        {/* <MovieAvatar picture={this.props.picture} /> */}
        <div className="media-body">
          <h4>{this.props.name}</h4>
          <p>
            {this.props.title} &nbsp;
            <span className="label label-info">{this.props.genere}</span>
          </p>
        </div>
        <hr/>
      </li>
    )
  }
}

export default MovieRow