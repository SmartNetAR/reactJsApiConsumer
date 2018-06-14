import React, { Component } from 'react';
// import logo from './media/logo.png';
// import './css/LeftBar.css';

class LeftBar extends Component {
  constructor() {
    super();
    this.state = {value: ''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.filterByText(this.state.value)
    event.preventDefault();
  }

  render() {
    return (
      <div>
          <form className="form-inline my-2 my-lg-0">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12">
                  <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary">Movie</button>
                    <button type="button" className="btn btn-secondary">Series</button>
                    <button type="button" className="btn btn-secondary">Episode</button>
                  </div>
                </div>
              </div>
                  <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12">
                      <input className="form-control mr-sm-2" type="search" placeholder="Movie title to search." aria-label="Search"/>
                    </div>

                    <div className="col col-12 col-sm-12 col-md-12">
                      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </div>
                  </div>
       
            </div>
          </form>
      </div>
    );
  }
}
export default LeftBar;