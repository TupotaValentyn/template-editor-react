import React, {Component} from 'react'
import './SidePanel.css'


class SidePanel extends Component {
  state = {
    placeholders: this.props.moc
  }
  
  onChange = val => {
    const id = +val.target.id
    const title = val.target.value

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

  render () {
    return (<form className="panel-form"> 
      {this.state.placeholders.map((item, index) => {
        return <input 
          className="panel-input"
          id={item.id}
          key={item.id}
          value={item.title}
          onChange={this.onChange}
          />
      })}
    </form>)
  }
}

export default SidePanel;