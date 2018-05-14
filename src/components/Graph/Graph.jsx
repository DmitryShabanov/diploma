import React from 'react';
import PropTypes from 'prop-types';
import Graph from 'react-graph-vis';

import { graphOptions as options } from '../../constants';

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
    <section className={style.container}>
      <div>
        <input
          type="text"
          value={node}
          onChange={event => onChangeNode(event.target.value)}
        />
        <button onClick={onAdd}>
          Add
        </button>
        <button onClick={onRemove}>
          Delete
        </button>
        <button onClick={onClear}>
          Clear
        </button>
        <button onClick={onPrev}>
          prev
        </button>
        <button onClick={onNext}>
          next
        </button>
      </div>
      <Graph
        graph={graph}
        options={options}
      />
    </section>
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
