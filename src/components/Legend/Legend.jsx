import React from 'react';
import PropTypes from 'prop-types';

import style from './Legend.scss';

const Legend = ({ legend }) => (
  <div className={style.container}>
    <p className={style.title}>
      Legend
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
};

export default Legend;
