import React from 'react'

function Header() {

    return <>
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
    </>
}

export default Header
