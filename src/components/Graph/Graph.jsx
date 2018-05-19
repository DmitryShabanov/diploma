import React from 'react';
import PropTypes from 'prop-types';
import Graph from 'react-graph-vis';

import Controls from '../Controls';

import { graphOptions } from '../../constants';

import style from './Graph.scss';

const MyGaraph = (props) => {
  const {
    graph,
    node,
    onChangeNode,
    onNext,
    onPrev,
    onAdd,
    onRemove,
    onClear,
  } = props;

  return (
    <div className={style.container}>
      <Controls
        node={node}
        onChangeNode={onChangeNode}
        onNext={onNext}
        onPrev={onPrev}
        onAdd={onAdd}
        onRemove={onRemove}
        onClear={onClear}
      />
      <Graph
        graph={graph}
        options={graphOptions}
      />
    </div>
  );
};

MyGaraph.propTypes = {
  graph: PropTypes.shape({
    nodes: PropTypes.array,
    edges: PropTypes.array,
  }).isRequired,
  node: PropTypes.string.isRequired,
  onChangeNode: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default MyGaraph;
