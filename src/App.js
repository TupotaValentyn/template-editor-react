import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import SidePanel from './sidePanel/SidePanel'
import Template from './Template/Template'


import './App.css';

 class App extends Component {

  passMoc = () => val => {

    const id = +val.target.id
    const title = val.target.value

    console.log(id, title)

    this.setState(state => {
      const placeholders = state.placeholders.map(item => {
        if (item.id === id) {
          return {...item, title: title}
        }
        return item
      })
      return {
        placeholders
      }
    })
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
        <Template moc={this.state.placeholders}/>
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

