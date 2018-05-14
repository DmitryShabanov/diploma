import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Header.scss';

import GitHubLogo from '../../images/github-logo.svg';

const Header = () => (
  <header className={style.header}>
    <div className={style.content}>
      <nav className={style.navBar}>
        <NavLink
          to="/"
          exact
          className={style.navItem}
          activeClassName={style.activeLink}
        >
          About
        </NavLink>
        <NavLink
          to="/binary-tree"
          exact
          className={style.navItem}
          activeClassName={style.activeLink}
        >
          Binary tree
        </NavLink>
        <NavLink
          to="/red-black-tree"
          exact
          className={style.navItem}
          activeClassName={style.activeLink}
        >
          Red-black tree
        </NavLink>
      </nav>
      <a className={style.git} href="https://github.com/DmitryShabanov/diploma">
        <GitHubLogo className={style.gitIcon} />
      </a>
    </div>
  </header>
);

export default Header;
