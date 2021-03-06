import React from 'react';

import Home from './Components/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';

import Header from './Components/Header'
import Footer from './Components/Footer'

import BlogPost from './Components/BlogPostTemplate/BlogPost.js'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return  <>

      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <Route path='/categories' exact component={Categories} /> */}
          {/* <Route path='/TestComponent' exact component={TestComponent} /> */}
          {/* <Route path='/categories/:category/:details/:itemCode' component={ProductDetails} /> */}
          {/* <Route path='/orderStatus' component={OrderStatus} /> */}
          <Route path='/blogs' exact component={Blogs} />
          <Route path='/blogs/:post'  component={BlogPost} />
          <Route path='/about' component={About} />
          {/* <Route path='/appointment' exact component={Appointment} /> */}
          {/* <Route path='/appointment/:itemCode' component={Appointment} /> */}
        </Switch>
        <Footer />
      </Router>
      </>

}

export default App;
