import React from 'react';
import PropTypes from 'prop-types';

import style from './Controls.scss';

const Controls = (props) => {
  const {
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
      <input
        className={style.input}
        type="text"
        placeholder="Node"
        value={node}
        onChange={event => onChangeNode(event.target.value)}
      />
      <button
        className={style.button}
        onClick={onAdd}
      >
        Add
      </button>
      <button
        className={style.button}
        onClick={onRemove}
      >
        Delete
      </button>
      <button
        className={style.button}
        onClick={onClear}
      >
        Clear
      </button>
      <button
        className={style.button}
        onClick={onPrev}
      >
        Prev
      </button>
      <button
        className={style.button}
        onClick={onNext}
      >
        Next
      </button>
    </div>
  );
};

Controls.propTypes = {
  node: PropTypes.string.isRequired,
  onChangeNode: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default Controls;
