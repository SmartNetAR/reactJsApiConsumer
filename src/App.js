import React, { Component } from 'react';
import './App.css';
import Header from './components/global/Header';
import Content from './components/global/Content';
import LeftBar from './components/global/LeftBar';

class App extends Component {
  constructor() {
    super();
      
    // this.handleClickLogo = this.handleClickLogo.bind(this);
  }
  state = { filterText:'Batman' };

  filterByText = text => {
    this.setState({
      filterText: text
    })
  }

  render() {
    return (
      <div className="App">
        <Header filterByText={this.filterByText}/>
        <div className="container">
            <div className="row">
              <div className="col-12 col-sm=2 col-md-3">
              <LeftBar/>
              </div>
              <div className="col-12 col-sm=10 col-md-19">
                <Content authapikey = 'f4fea2a9' search={this.state.filterText}/>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
