import React from 'react'

function Footer() {
    return <>
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
                    <a href='/about'>About Us</a>
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
}

export default Footer
