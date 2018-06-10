import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { translate } from 'react-i18next';

import style from './About.scss';

import ArrowIcon from '../../images/arrow-down.svg';

const scrollPage = () => {
  const element = document.getElementById('about-content');

  element.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
  });
};

const About = ({ t }) => (
  <section className={style.container}>
    <Helmet>
      <title>{t('header.about')}</title>
    </Helmet>

    <div className={style.title}>
      <h1 className={style.titleText}>{t('about.title')}</h1>
      <ArrowIcon
        className={style.arrowIcon}
        onClick={scrollPage}
      />
    </div>

    <div id="about-content" className={style.content}>
      <p className={style.contentText}>
        {t('about.p1')}
      </p>
      <p className={style.contentText}>
        {t('about.p2')}
      </p>
    </div>
  </section>
);

About.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate()(About);
