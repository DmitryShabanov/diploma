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
    onSearch,
    onFindMin,
    onFindMax,
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
        onSearch={onSearch}
        onFindMin={onFindMin}
        onFindMax={onFindMax}
      />
      <Graph
        graph={graph}
        options={graphOptions}
        events={{
          select: (selected) => {
            onChangeNode(String(selected.nodes[0] ? selected.nodes[0] : ''));
          },
        }}
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
  onSearch: PropTypes.func.isRequired,
  onFindMin: PropTypes.func.isRequired,
  onFindMax: PropTypes.func.isRequired,
};

export default MyGaraph;
