import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { translate } from 'react-i18next';

import GitHubLogo from '../../images/github-logo.svg';
import En from '../../images/en.svg';
import Ru from '../../images/ru.svg';
import Ua from '../../images/ua.svg';

import style from './Header.scss';

const Header = ({ t, i18n }) => (
  <header className={style.header}>
    <div className={style.content}>
      <nav className={style.navBar}>
        <NavLink
          to="/"
          exact
          className={style.navItem}
          activeClassName={style.activeLink}
        >
          {t('header.about')}
        </NavLink>
        <NavLink
          to="/binary-tree"
          exact
          className={style.navItem}
          activeClassName={style.activeLink}
        >
          {t('header.binary')}
        </NavLink>
        <NavLink
          to="/avl-tree"
          exact
          className={style.navItem}
          activeClassName={style.activeLink}
        >
          {t('header.avl')}
        </NavLink>
      </nav>
      <div className={style.options}>
        <div
          onClick={() => i18n.changeLanguage('en')}
          className={style.flagWrapper}
        >
          <En className={style.flagIcon} />
        </div>
        <div
          onClick={() => i18n.changeLanguage('ru')}
          className={style.flagWrapper}
        >
          <Ru className={style.flagIcon} />
        </div>
        <div
          onClick={() => i18n.changeLanguage('ua')}
          className={style.flagWrapper}
        >
          <Ua className={style.flagIcon} />
        </div>
        <a className={style.git} href="https://github.com/DmitryShabanov/diploma">
          <GitHubLogo className={style.gitIcon} />
        </a>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  t: PropTypes.func.isRequired,
  i18n: PropTypes.object.isRequired,
};

export default translate()(Header);
