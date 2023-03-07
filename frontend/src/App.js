import './App.css';
import Blog from './components/Blog'
import React from 'react'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App">
      <div className="HeaderA">
        A Forest Blog
      </div>
      <div className="HeaderB">
        ...about photography
      </div>
      <div>
        <Blog />
      </div>
      <Footer />
    </div>
  );
}

export default App;
