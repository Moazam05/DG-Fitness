import React, { Component } from 'react';
// import './Home.css';
// import Header from '../Header.js'
// import Footer from '../Footer.js'
import {Link} from 'react-router-dom'
import Hero from '../Hero.js'

export class Home extends Component {
  render() {
    return (
      <>
        <div className='preloader'>
          <div className='loader_34'>
            <div className='ytp-spinner'>
              <div className='ytp-spinner-container'>
                <div className='ytp-spinner-rotator'>
                  <div className='ytp-spinner-left'>
                    <div className='ytp-spinner-circle' />
                  </div>
                  <div className='ytp-spinner-right'>
                    <div className='ytp-spinner-circle' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Preloader End */}
        

        {/* <Header /> */}

        
        <Hero />


        {/* video area */}
        <div
          className='container text-center pt_100 mb_60 position-relative'
          id='lifes'
        >
          {/* arrow down */}
          <div className='text-center arrow_down'>
            <a href='#lifes'>
              <i className='far fa-angle-double-down' />
            </a>
          </div>
          <h2 className='title'>
            FITNESS is <span className='theme_text'>a LIFESTYLE</span>
          </h2>
        </div>
        <div className='video_area'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-11 col-xl-9'>
                <div className='video_box'>
                  <video controls className='video'>
                    <source src='videos/main.mp4' type='video/mp4' />
                  </video>
                  <div className='controls'>
                    <img
                      src='img/video_bg.png'
                      className='w-100 poster'
                      alt=''
                    />
                    <div className='play_button'>
                      <i className='fa fa-play' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* program area */}
        <div className='program_area'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 text-center'>
                <h2 className='title'>
                  See our Amazing <Link to="/blogs">Blogs</Link> to change your {' '}
                  <span className='theme_text'>LIFESTYLE</span>
                </h2>
                <h2 className='title' style={{marginTop:"40px"}}>
                  PROGRAMS to suit your{' '}
                  <span className='theme_text'>LIFESTYLE</span>
                </h2>
              </div>
            </div>
          </div>
          <div className='program_box_wrapper'>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-md-6 col-lg-4 mt_30'>
                  <div className='program_box'>
                    <img src='img/img1.jpg' className='program_img' alt='' />
                    <div className='title_box text-center'>
                      <div className='icon_box'>
                        <img src='img/icon1.svg' className='img-fluid' alt='' />
                      </div>
                      <p>DIY Programs</p>
                    </div>
                    <div className='overlay_text'>
                      <h4>For The Train Whenever Lifestyle</h4>
                      <ul>
                        <li>Email consultation</li>
                        <li>Nutrition Plan – tailored to YOUR body type</li>
                        <li>Workout Program – to suit YOUR goals</li>
                        <li>Access To All Our Resources Via Website/App</li>
                        <li>Live Q&amp;A Once A Week</li>
                        <li>Monthly Check-Ins</li>
                      </ul>
                      <div className='duration d-flex align-items-center justify-content-between'>
                        <h5>AED 380 /month</h5>
                        {/* <a href='#'>Learn More...</a> */}
                        <a href='/'>Learn More...</a>
                      </div>
                    </div>
                  </div>
                  {/* <a href='#' className='button mt_25'> */}
                  <a href='/' className='button mt_25'>
                    START NOW!
                  </a>
                </div>
                <div className='col-md-6 col-lg-4 mt_30'>
                  <div className='program_box'>
                    <img src='img/img2.jpg' className='program_img' alt='' />
                    <div className='title_box text-center'>
                      <div className='icon_box'>
                        <img src='img/icon2.svg' className='img-fluid' alt='' />
                      </div>
                      <p>Online Training</p>
                    </div>
                    <div className='overlay_text'>
                      <h4>For The Train Whenever Lifestyle</h4>
                      <ul>
                        <li>E-mail Consultation</li>
                        <li>Nutrition Plan – tailored to YOUR body type</li>
                        <li>Workout Program – to suit YOUR goals</li>
                        <li>Access To All Our Resources Via Website/App</li>
                        <li>1-1 Training On Zoom Once A Week</li>
                      </ul>
                      <div className='duration d-flex align-items-center justify-content-between'>
                        <h5>AED 380 /month</h5>
                        {/* <a href='#'>Learn More...</a> */}
                        <a href='/'>Learn More...</a>
                      </div>
                    </div>
                  </div>
                  <a href='/' className='button mt_25'>
                    {/* <a href='#' className='button mt_25'> */}
                    START NOW!
                  </a>
                </div>
                <div className='col-md-6 col-lg-4 mt_30'>
                  <div className='program_box'>
                    <img src='img/img3.jpg' className='program_img' alt='' />
                    <div className='title_box text-center'>
                      <div className='icon_box'>
                        <img src='img/icon3.svg' className='img-fluid' alt='' />
                      </div>
                      <p>In-Person Training</p>
                    </div>
                    <div className='overlay_text'>
                      <h4>For The Train Always Lifestyle</h4>
                      <ul>
                        <li>1-1 Consultation</li>
                        <li>Objective Goal Setting With Measurements</li>
                        <li>1-1 Training Twice A Week</li>
                        <li>Nutrition Plan – tailored to YOUR body type</li>
                        <li>Access To All Our Resources Via Website/App</li>
                        <li>Monthly Check-Ins</li>
                      </ul>
                      <div className='duration d-flex align-items-center justify-content-between'>
                        <h5>AED 380 /month</h5>
                        {/* <a href='#'>Learn More...</a> */}
                        <a href='/'>Learn More...</a>
                      </div>
                    </div>
                  </div>
                  {/* <a href='#' className='button mt_25'> */}
                  <a href='/' className='button mt_25'>
                    START NOW!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* testimonial area */}
        <div className='testimonial_slider'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-12 text-center'>
                <h2 className='title'>
                  YOUR RESULTS ARE{' '}
                  <span className='theme_text'>OUR RESULTS</span>
                </h2>
              </div>
              <div className='col-lg-11 col-xl-10'>
                <div className='owl-carousel slider'>
                  <div className='item'>
                    <div className='row g-0'>
                      <div className='col-lg-6'>
                        <div className='client_img'>
                          <video controls className='video'>
                            <source src='videos/video.mp4' type='video/mp4' />
                          </video>
                          <div className='controls'>
                            <img
                              src='img/client_img.png'
                              className='poster'
                              alt=''
                            />
                            <div className='play_button'>
                              <i className='fa fa-play' />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='text_box'>
                          <img
                            src='img/quote.svg'
                            className='img-fluid'
                            alt=''
                          />
                          <p className='mt_60'>
                            AMAZING workout with denis! he is super cool and he
                            will know exactly how to push you beyond your limit
                            to make you get the max out of the session.
                          </p>
                          <h6 className='text-end mt_15'>Nikka Ducotan</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='row g-0'>
                      <div className='col-lg-6'>
                        <div className='client_img'>
                          <video controls className='video'>
                            <source src='videos/video.mp4' type='video/mp4' />
                          </video>
                          <div className='controls'>
                            <img
                              src='img/client2.jpg'
                              className='poster'
                              alt=''
                            />
                            <div className='play_button'>
                              <i className='fa fa-play' />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='text_box'>
                          <img
                            src='img/quote.svg'
                            className='img-fluid'
                            alt=''
                          />
                          <p className='mt_60'>
                            AMAZING workout with denis! he is super cool and he
                            will know exactly how to push you beyond your limit
                            to make you get the max out of the session.
                          </p>
                          <h6 className='text-end mt_15'>Nikka Ducotan</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Footer /> */}

      </>
    );
  }
}

export default Home;
