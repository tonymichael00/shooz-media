// TODO: create class for clicked ham menu. change class when clicked
// onclick remove all formatting classes and change to click
import React, { useState } from 'react';
import './NavBar.scss';
import logo from './Images/shoozLogo.svg';
import HamMenu from './HamMenu/HamMenu';
import { motion } from 'framer-motion';

// TODO: CENTER LINKS
// import hamMenu from './Images/hamMenu.svg';

const NavBar = ({ contMotion }) => {
  const { contSideMove, itemSideMoveLeft, itemSideMoveRight, viewportAni } =
    contMotion;
  const { headView, blurbView } = viewportAni;

  const [clickMenu, setClickMenu] = useState(false);

  //triggers opening and closing navigation menu
  let navLinksContToggle = clickMenu
    ? 'nav-links-cont-click'
    : 'nav-links-cont';
  let navLinksToggle = clickMenu ? 'nav-links-click' : 'nav-links';

  const contVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        type: 'tween',
        // delay: 1,
        duration: 1,
      },
    },
    // scaleSize: {},
  };

  const linkVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        type: 'tween',
        // delay: 1,
        duration: 1,
      },
    },
    // scaleSize: {
    //   scale: 1.1,
    //   transition: { type: 'spring', duration: 0.3 },
    // },
  };

  const hoverAni = {
    scale: 1.1,
    // backgroundColor: 'hsla(62.7,100%,52%,25%)',
    transition: { type: 'spring', duration: 0.3 },
  };

  return (
    <header>
      <motion.nav id="nav-bar">
        <motion.a
          href=""
          className="logo center-flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={linkVariants.visible.transition}
        >
          <img
            src={logo}
            alt="Logo"
            className="center-flex"
            height="70%"
            // width="50%"
          />
        </motion.a>
        {/* div to create space in grid */}

        <motion.div
          id="ham-menu"
          variants={linkVariants}
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{ type: 'tween', duration: 1.5, delay: 1 }}
        >
          <HamMenu
            setClickMenu={setClickMenu}
            clickMenu={clickMenu}
          />
        </motion.div>
        {/* DONT REMOVE NAV-LINKS-CONT OR NAV-LINKS FROM CLASSNAME */}
        <motion.div
          className={`nav-links-cont ${navLinksContToggle}`}
          variants={contVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            className={`nav-links ${navLinksToggle}`}
            href="#about-head-link"
            variants={linkVariants}
          >
            About
          </motion.a>
          <motion.a
            className={`nav-links ${navLinksToggle}`}
            href="#where-head-link"
            variants={linkVariants}
          >
            Experience
          </motion.a>
          <motion.a
            className={`nav-links ${navLinksToggle}`}
            href="#projects-sec-link"
            variants={linkVariants}
          >
            Projects
          </motion.a>
          <motion.a
            className={`nav-links ${navLinksToggle}`}
            href="#contact-sec-link"
            variants={linkVariants}
          >
            Contact
          </motion.a>
          <motion.a
            href="https://drive.google.com/uc?export=download&id=1oHHNpUI-g-H1eaPRs6WQVsKTDm8Ju5fU"
            className={`nav-links ${navLinksToggle} nav-links-button`}
            variants={linkVariants}
            whileHover={hoverAni}
          >
            Resume
          </motion.a>
        </motion.div>
      </motion.nav>
    </header>
  );
};

export default NavBar;
