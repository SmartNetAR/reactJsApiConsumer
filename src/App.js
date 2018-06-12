import React, { Component } from 'react';
import './App.css';
import Header from './components/global/Header';
import Content from './components/global/Content';

class App extends Component {
  constructor() {
    super();
      
    // this.handleClickLogo = this.handleClickLogo.bind(this);
  }
  state = { filterText:'Batman' };

  filterByText = text => {
    alert(text);
    this.setState({
      filterText: text
    })
  }

  render() {
    return (
      <div className="App">
        <Header filterByText={this.filterByText}/>
        <Content authapikey = 'f4fea2a9' search={this.state.filterText}/>
      </div>
    );
  }
}

export default App;
