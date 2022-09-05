import React, { Component } from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import WideScreenHero from './Slides/WideScreen/HeroSlide/Hero';
import WideScreenWork from './Slides/WideScreen/WorkSlide/Work';
import WideScreenSkills from './Slides/WideScreen/Skills';
import WideScreenContact from './Slides/WideScreen/ContactSlide/Contact';
import './Assets/index.css';

const GlobalStyle = createGlobalStyle`
html, body { margin: 0;}
*, *:before, *:after { box-sizing: border-box; }
`;

class App extends Component {
  componentDidMount() {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }

  render() {
    return (
      <React.Fragment>
        <WideScreenHero />
        <WideScreenWork />
        <WideScreenSkills />
        <WideScreenContact />
        <GlobalStyle />
      </React.Fragment>
    );
  }
}

render(React.createElement(App), document.getElementById('root'));
