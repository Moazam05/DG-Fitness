import React, { Component } from 'react';
import './Home.css';

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
        {/* start header */}
        <header className='d-flex align-items-center'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-md-3 col-5 logo'>
                {/*logo start*/}
                <a href='index.html'>
                  <img src='img/logo.svg' className='img-fluid' alt='' />
                </a>
                {/*logo end*/}
              </div>
              <div className='col-md-9 col-7'>
                {/*menu start*/}
                <div className='menu_area d-flex align-items-center justify-content-end'>
                  <ul>
                    <li>
                      <a href='index.html' className='active'>
                        EN
                      </a>
                    </li>
                    <li>
                      <a href='index-2.html'>ع</a>
                    </li>
                  </ul>
                  <div className='button_wrapper d-none d-md-block'>
                    {/* <a href='#' className='button'> */}
                    <a href='/' className='button'>
                      SIGN IN
                    </a>
                    {/* <a href='#' className='button btn2'> */}
                    <a href='/' className='button btn2'>
                      SIGN UP
                    </a>
                  </div>
                  <div className='social_icons'>
                    {/* <a
                      href='https://www.facebook.com/dgfitnessandlifestyle/'
                      target='_blank'
                    > */}
                    <a href='/' target='_blank'>
                      <img src='img/facebook.svg' alt='' />
                    </a>
                    {/* <a
                      href='https://www.instagram.com/dg_fitnessandlifestyle/'
                      target='_blank'
                    > */}
                    <a href='/' target='_blank'>
                      <img src='img/instagram.svg' alt='' />
                    </a>
                    {/* <a
                      href='https://wa.me/971569677986'
                      target='_blank'
                      data-bs-toggle='tooltip'
                      data-bs-placement='bottom'
                      title={+971569677986}
                    > */}
                    <a
                      href='/'
                      target='_blank'
                      data-bs-toggle='tooltip'
                      data-bs-placement='bottom'
                      title={+971569677986}
                    >
                      <img src='img/whatsapp.svg' alt='' />
                    </a>
                  </div>
                </div>
                {/* menu toggler */}
                <div className='hamburger-menu'>
                  <span className='line-top' />
                  <span className='line-center' />
                  <span className='line-bottom' />
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* end header */}
        {/* banner area */}
        <div
          className='banner_area d-flex align-items-center'
          style={{ backgroundImage: 'url(img/banner.jpg)' }}
        >
          <div className='container'>
            <div className='row'>
              <div className='col-12 text-center'>
                <h1>
                  Build <span>Your</span> Body
                </h1>
                <a href='/' className='button'>
                  {/* <a href='#' className='button'> */}
                  START NOW!
                </a>
              </div>
            </div>
          </div>
        </div>
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
        {/* footer area */}
        <footer>
          <div className='container'>
            <div className='row gx-lg-5 justify-content-between'>
              <div className='col-lg-5 mt_30'>
                <form action='#'>
                  <h4>Contact Us</h4>
                  <div className='row'>
                    <div className='col-sm-6 mt_25'>
                      <input
                        type='text'
                        className='input_box'
                        placeholder='Name'
                      />
                    </div>
                    <div className='col-sm-6 mt_25'>
                      <input
                        type='email'
                        className='input_box'
                        placeholder='Email'
                      />
                    </div>
                    <div className='col-12 mt_25'>
                      <textarea
                        className='input_box'
                        placeholder='Leave your message'
                        defaultValue={''}
                      />
                    </div>
                    <div className='col-12 mt_25'>
                      <button type='submit' className='button'>
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className='col-lg-3 mt_30'>
                <a href='index.html' className='logo'>
                  <img src='img/flogo.svg' className='img-fluid' alt='' />
                </a>
                <ul>
                  <li>
                    <a href='/'>About Us</a>
                  </li>
                  <li>
                    <a href='/'>Inspiration</a>
                  </li>
                  <li>
                    <a href='/'>Education</a>
                  </li>
                </ul>
                <div className='social_icons mt_20'>
                  {/* <a
                    href='https://www.facebook.com/dgfitnessandlifestyle/'
                    target='_blank'
                  > */}
                  <a href='/' target='_blank'>
                    <img src='img/facebbookw.svg' alt='' />
                  </a>
                  {/* <a
                    href='https://www.instagram.com/dg_fitnessandlifestyle/'
                    target='_blank'
                  > */}
                  <a href='/' target='_blank'>
                    <img src='img/instagram2.svg' alt='' />
                  </a>
                  {/* <a href="https://wa.me/971569677986"  target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" title={+971569677986}> */}
                  <a
                    href='/'
                    target='_blank'
                    data-bs-toggle='tooltip'
                    data-bs-placement='bottom'
                    title={+971569677986}
                  >
                    <img src='img/whatsappw.svg' alt='' />
                  </a>
                </div>
              </div>
              <div className='col-lg-3 mt_30'>
                <h4>Corporate Office</h4>
                <ul className='mt_35'>
                  <li>
                    <i className='fal fa-paper-plane' /> 44 New Design Street,
                    rne 005
                  </li>
                  <li>
                    <i className='fal fa-phone' />{' '}
                    <a href='tel:971569677986'>+971 56 967 7986</a>
                  </li>
                  <li>
                    <i className='fal fa-envelope' />{' '}
                    <a
                      className='text-truncate'
                      href='mailto:denis@dgfitness.guru'
                    >
                      denis@dgfitness.guru
                    </a>
                  </li>
                  <li>
                    <i className='far fa-globe' />{' '}
                    <a
                      href='dgfitnessandlifestyle.com'
                      className='text-truncate'
                    >
                      dgfitnessandlifestyle.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className='col-12 text-center copy_text'>
                <a href='/'>Terms and Conditions</a>
                <span>|</span>
                <a href='/'>Privacy Policy</a>
                <p>© 2021 Denis Golosin All Rights Reserved</p>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Home;
