import React from 'react';
import NavBar from '../NavBar';
import './Landing.scss';
import { motion } from 'framer-motion';

// TODO: maybe add blue glow to title shapes
// use varaints in app.js to propogate to children

const Landing = () => {
  return (
    <div id="landing">
      <NavBar />
      <motion.div
        id="shooz-bkd-wrapper"
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'tween' }}
      >
        <div id="side-shooz-bkd"></div>
        <div id="shooz-bkd">
          <p className="center-flex">
            <span className="yellow-txt center-flex">shooz</span>
          </p>
          <p className="center-flex">
            <span className="shooz-subtitle white-txt">with </span>
            &nbsp;
            <span className="shooz-subtitle yellow-txt hover-blue">
              Mike Schuster
            </span>
          </p>
        </div>
      </motion.div>
      <motion.div id="title-caption-wrapper">
        <div
          id="title-caption-side-bkd"
          initial={{ x: '100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'tween' }}
        ></div>
        <div
          id="title-caption-bkd"
          initial={{ x: '100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'tween' }}
        >
          <p>I can help solve your web problems.</p>
          <p>Don't hesitate to contact me.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;
