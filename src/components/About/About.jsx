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
      <div className={style.contentText}>
        {t('about.p1')}
      </div>
      <div className={style.contentText}>
        <p>{t('about.p2')}</p>
        <ul className={style.list}>
          <li>{t('about.p2l1')}</li>
          <li>{t('about.p2l2')}</li>
        </ul>
      </div>
      <div className={style.contentText}>
        <p>{t('about.bt1')}</p>
        <ul className={style.list}>
          <li>{t('about.bt1l1')}</li>
          <li>{t('about.bt1l2')}</li>
          <li>{t('about.bt1l3')}</li>
        </ul>
        <p>{t('about.bt2')}</p>
        <p className={style.indentation}>{t('about.bt3')}</p>
        <ul className={style.list}>
          <li>{t('about.bt3l1')}</li>
          <li>{t('about.bt3l2')}</li>
          <li>{t('about.bt3l3')}</li>
        </ul>
      </div>
      <div className={style.contentText}>
        {t('about.avl1')}
      </div>
    </div>
  </section>
);

About.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate()(About);
