import React,{ useState, useEffect } from 'react';
import './App.css';
import { Cover } from './components/cover/Cover';
import { Navbar } from './components/navbar/Navbar';
import { About } from './components/about/About';
import { Slider } from './components/slider/Slider';
import { Helmet } from 'react-helmet';

function App() {
  const [scrollHeight, setScrollHeight] = useState(0)

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [scrollHeight])

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A simple website to show my portfolio" />
        <meta name="keywords" content="portfolio, react, reactjs, javascript, portfolio website, portfolio website react" />
        <meta name="author" content="Facundo Vicente" />
        <title>Facundo Vicente</title>
      </Helmet>

        <Navbar isScrolling={scrollHeight}/>
        <Cover />
        <About />
        <Slider />
    </div>
  );
}

export default App;
