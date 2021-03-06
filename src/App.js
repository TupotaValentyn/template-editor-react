import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';

 class App extends Component {

  render() {
    return (
      <div className="wrapper">
        <section className="site">
          <div className='parent'>
            <section id="hero" className="hero hero-8 pb-0">
            <div className="container">
              <div className="row">
              
                <div className="col-xs-12 col-sm-5 col-md-5">
                  <div className="hero-content">
                    <div>
                      <h1 className="editable">header</h1>
                      <div className="panel">

                      </div>
                    </div>
                    <div>
                      <p className="editable">
                      {
                        
                      }
                        Duis sed odio sit amet nibh vulputate cursus 
                        a sit amet mauris. Morbi accumsan ipsum velit.
                      </p>
                      <div className="panel"> 

                      </div>
                    </div> 
                    <a className="btn btn-primary" data-scroll="scrollTo" href="http://landing.zytheme.com/interact/landing-product.html#device7">order now</a>
                  </div>
                  <div className="col-xs-12 col-sm-7 col-md-7">
                    <div className="hero-img"></div>
                      <img src="" alt="device image" />
                    </div>
                </div>
              
              </div>
            </div>
          </section>
          
            {/* Next section */}

              <section id="featured1" className="featured featured-1">
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

            {/* Next section */}

              <section id="device5" className="device device-5 bg-gray">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-5">
                    <div className="device-content">
                      <h3 className="editable">The Highest Design Quality</h3>
                      <p className="editable"> Duis sed odio sit amet nibh vulputate cursus an amet mauris Morbi accumsan ipsum velit. Nam nec a odio.</p>
                      <a className="btn btn-primary" href="http://landing.zytheme.com/interact/landing-product.html#">order now</a>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-7">
                    <img className="img-responsive center-block" src="./product_files/device-7.png" alt="device img" />
                  </div>
                </div>
              </div>
            </section>

            {/* Next section */}

              <section id="device6" className="device device-5">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-7">
                    <img className="img-responsive" src="./product_files/device-8.png" alt="device img" />
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-5">
                    <div className="device-content pl-0">
                      <h3 className="editable">Compatible With Much Devices</h3>
                      <p className="editable">Duis sed odio sit amet nibh vulputate cursus an amet mauris Morbi accumsan ipsum velit. Nam nec a odio.</p>
                      <a className="btn btn-primary" href="http://landing.zytheme.com/interact/landing-product.html#">order now</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Next section */}

              <section id="media4" className="media media-4 text-center bg-overlay bg-overlay-dark bg-section" >
              <div className="container">
                <div className="row">
                  <div className="popup-video">
                    <button className="get-rusult" onClick={this.getResult}>GET RESULT</button>
                  </div>
                </div>
              </div>
            </section>
              
          </div>
          </section>
        <section className="panel-section">
          <div className="side-panel">
          
          </div>
      </section>
      </div>
      
    )
  }
}

export default App;

