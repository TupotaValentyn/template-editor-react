import React, {Component} from 'react'
import './SidePanel.css'


class SidePanel extends Component {
  // state = {
  //   placeholders: this.props.moc
  // }
  
  // onChange = val => {
  //   const id = +val.target.id
  //   const title = val.target.value

  //   this.setState(state => {
  //     const placeholders = state.placeholders.map(item => {
  //       if (item.id === id) {
  //         return {...item, title: title}
  //       }
  //       return item
  //     })
  //     return {
  //       placeholders
  //     }
  //   })
  // }

// THIS

  render () {

    const {passMoc, moc} = this.props

    return (<form className="panel-form">
      {moc.map((item, index) => {
        return <input
          className="panel-input"
          id={item.id}
          key={item.id}
          value={item.title}
          onChange={passMoc()}
          />
      })}
      {
        moc.map(el => {

          const fields =  Object.keys(el)
          fields.shift()
          const values = Object.values(el)
          values.shift()
          return values.map(item => {
            return <input
              className="panel-input"
              placeholder={item}
            />
          })
        })
      }
    </form>)
  }
}

export default SidePanel;