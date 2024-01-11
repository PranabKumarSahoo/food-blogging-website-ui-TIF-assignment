import React from 'react';
import "./index.css";
import Home from './sections/Home';
import Navbar from './components/Navbar';
import About from './sections/About';
import Articles from './sections/Articles';
import Footer from './sections/Footer';

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <section>
        <Home />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Articles />
      </section>
      <section>
        <Footer/>
      </section>
    </main>
  )
}

export default App;