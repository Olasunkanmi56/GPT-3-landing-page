import React from 'react'
import './App.css';

import {Blog, Features, Footer, Header, Possiblility, Whatgpt} from './container'
import { Navbar, CTA, Brand} from  './components' 

function App() {
  return (
    <div className="App">
        <div className="gradient__bg">
           <Navbar />
           <Header />
        </div>
        <Brand />
        <Whatgpt />
        <Features />
        <Possiblility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  );
}

export default App;
