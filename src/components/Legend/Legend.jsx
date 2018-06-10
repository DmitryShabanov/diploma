import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import style from './Legend.scss';

const Legend = ({ legend, t }) => (
  <div className={style.container}>
    <p className={style.title}>
      {t('legend.title')}
    </p>
    {legend.length > 0 ? (
        legend.map(item => (
          <p
            className={style.legendItem}
            key={item.description}
          >
            {item.description}
          </p>
        ))
      )
      : null
    }
  </div>
);

Legend.defaultProps = {
  legend: [],
};

Legend.propTypes = {
  legend: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.number,
    description: PropTypes.string,
  })),
  t: PropTypes.func.isRequired,
};

export default translate()(Legend);
