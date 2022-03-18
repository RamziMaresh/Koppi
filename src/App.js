import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  // instead of "Switch"
  Route, Switch
} from "react-router-dom";
 
import './App.css';
import Home from './components/pages/Home';
import Aboutus from './components/pages/Aboutus';
import Services from './components/pages/Services';
import Faq from './components/pages/Faq';
import Contactus from './components/pages/Contactus';



function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      
    <Route path='/' exact component={Home}/>
    <Route path='/aboutus'  component={Aboutus}/>
    <Route path='/services'  component={Services}/>
    <Route path='/faq'  component={Faq}/>
    <Route path='/contactus'  component={Contactus}/>


    

      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
