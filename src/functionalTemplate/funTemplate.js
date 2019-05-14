import React, {useState} from 'react'


export default function FunTemplate (mock) {

  const {moc} = mock
  // console.log(moc)
  const [state, setState] = useState(0)

  function count () {
    internal.next()
  }

  function* contentRender () {
    console.log(state)
    yield setState(state + 1)
  }

  const internal = contentRender()
  console.log()

  return (
      <section id="featured1" className="featured featured-1">
      <h2>{state}</h2>
      <h2></h2>
      <h2></h2>
      <h2></h2>
      <button onClick={count}>push</button>     
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4">
            <div className="featured-panel">
              <div className="featured-icon">
                <i className="lnr lnr-screen"></i>
              </div>
              <div className="featured-content">
                <h3 className="editable">Compatiblity Ready</h3>
                <p className="editable">Duis sed odio sit amet nibh vuutate cursus a sit amet mauris morbi accumsan ipsum velit nam nec tellus viele a odio.</p>
              </div>
            </div>
          </div>
          
          <div className="col-xs-12 col-sm-12 col-md-4">
            <div className="featured-panel">
              <div className="featured-icon">
                <i className="lnr lnr-star"></i>
              </div>
              <div className="featured-content">
                <h3 className="editable">Up To Date</h3>
                <p className="editable">Duis sed odio sit amet nibh vuutate cursus a sit amet mauris morbi accumsan ipsum velit nam nec tellus viele a odio.</p>
              </div>
            </div>
          </div>
          
          <div className="col-xs-12 col-sm-12 col-md-4">
            <div className="featured-panel">
              <div className="featured-icon">
                <i className="lnr lnr-diamond"></i>
              </div>
              <div className="featured-content">
                <h3 className="editable">Simple Design</h3>
                <p className="editable">Duis sed odio sit amet nibh vuutate cursus a sit amet mauris morbi accumsan ipsum velit nam nec tellus viele a odio.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}