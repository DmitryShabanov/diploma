import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import style from './Header.scss';

const Header = ({ location }) => (
  <header className={style.header}>
    <nav className={style.navBar}>
      <Link
        className={`${style.navItem} ${location.pathname === '/' ? style.activeLink : ''}`}
        to="/"
      >
        About
      </Link>
      <Link
        className={`${style.navItem} ${location.pathname === '/binary-tree' ? style.activeLink : ''}`}
        to="/binary-tree"
      >
        Binary tree
      </Link>
      <Link
        className={`${style.navItem} ${location.pathname === '/red-black-tree' ? style.activeLink : ''}`}
        to="/red-black-tree"
      >
        Red-black tree
      </Link>
      <Link
        className={`${style.navItem} ${location.pathname === '/b-tree' ? style.activeLink : ''}`}
        to="/b-tree"
      >
        B tree
      </Link>
    </nav>
  </header>
);

Header.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Header);
