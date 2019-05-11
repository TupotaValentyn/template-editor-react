import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import SidePanel from './sidePanel/SidePanel'
import Template from './Template/Template'


import './App.css';

 class App extends Component {

  passMoc = data => () => {
    this.setState({moc: data})
  }

  state = {
    placeholders: [
      {
        id: 0,
        title: 'first section',
        description: 'some description'
      }, {
        id: 1,
        title: 'secont section',
        description: 'some desc second section'
      }, {
        id: 2,
        title: 'third section',
        description: 'some desc third section'
      }
    ]
  }

  render() {
    return (
      <div className="wrapper">
        <Template />
        <section className="panel-section">
          <div className="side-panel">
            <SidePanel moc={this.state.placeholders} passMoc={this.passMoc}/>
          </div>
      </section>
      </div>
      
    )
  }
}

export default App;

