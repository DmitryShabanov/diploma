import React from 'react';
import PropTypes from 'prop-types';
import Graph from 'react-graph-vis';

import { graphOptions as options } from '../../constants';

import style from './Graph.scss';

const MyGaraph = ({ graph }) => (
  <div className={style.container}>
    <Graph
      graph={graph}
      options={options}
    />
  </div>
);

MyGaraph.propTypes = {
  graph: PropTypes.shape({
    nodes: PropTypes.array,
    edges: PropTypes.array,
  }).isRequired,
};

export default MyGaraph;
