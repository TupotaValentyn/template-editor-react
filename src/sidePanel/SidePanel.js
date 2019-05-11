import React, {Component} from 'react'
import './SidePanel.css'


class SidePanel extends Component {
  state = {

  }
  
  render () {
    return (<form className="panel-form"> 
      {this.props.moc.form.placeholders.map((item, index) => {
        return <input className="panel-input" key={index} value={item.title}/>
      })}
    </form>)
  }
}

export default SidePanel;