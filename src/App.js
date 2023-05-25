// TODO: SLOW TRANSTION SPEED
// First, figure out text for project blurbs
// APPLE BUGS
// CORNERS ARE SQUARE OR CUT OFF
// LOWER LINKS ARE MESSED UP
// ANDROID
// NAV DOESN'T SHOW UNTIL YOU SCROLL BACK UP
// WHAT IVE DONE, PEPPER TEXT MOVES AT DIFFERENT SPEED  FIXED
// contacts, phone and email squish in apple phone
// replace shooz logo with svg

import './App.scss';
import React from 'react';
import AboutExp from './Components/AboutExp';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Landing from './Components/Landing';

function App() {
  //variants

  const itemSideMoveLeft = {
    hidden: {
      x: '-100vw',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'tween', duration: 0.4 },
    },
    // viewed: { once: true, amount: 1 },
  };

  const itemSideMoveRight = {
    hidden: {
      opacity: 0,

      x: '100vw',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'tween', duration: 0.4 },
    },
    // viewed: { once: true, amount: 1 },
  };

  const viewportAni = {
    headView: { once: true, amount: 1 },
    blurbView: { once: true, amount: 0.5 },
  };

  return (
    <div id="content">
      <Landing />
      <AboutExp
        contMotion={{
          itemSideMoveLeft,
          itemSideMoveRight,
          viewportAni,
        }}
      />
      <Projects
        contMotion={{
          itemSideMoveLeft,
          itemSideMoveRight,
          viewportAni,
        }}
      />
      <Contact
        contMotion={{
          itemSideMoveLeft,
          itemSideMoveRight,
          viewportAni,
        }}
      />
    </div>
  );
}

export default App;
