import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import style from './Controls.scss';

const Controls = (props) => {
  const {
    node,
    onChangeNode,
    onNext,
    onPrev,
    onAdd,
    onRemove,
    onSearch,
    onFindMin,
    onFindMax,
    onInorder,
    onPostorder,
    onPreorder,
  } = props;

  return (
    <div className={style.container}>
      <input
        className={style.input}
        type="text"
        placeholder="Node"
        value={node}
        onChange={event => onChangeNode(event.target.value)}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            onAdd();
          }
        }}
      />
      <button
        className={style.button}
        onClick={onAdd}
        data-tip="Add node"
      >
        Add
      </button>
      <button
        className={style.button}
        onClick={onRemove}
        data-tip="Delete node"
      >
        Delete
      </button>
      <button
        className={style.button}
        onClick={onSearch}
        data-tip="Search node"
      >
        Search
      </button>
      <button
        className={style.button}
        onClick={onPrev}
        data-tip="Previous step"
      >
        Prev
      </button>
      <button
        className={style.button}
        onClick={onNext}
        data-tip="Next step"
      >
        Next
      </button>
      <button
        className={style.button}
        onClick={onPreorder}
        data-tip="Pre-order traversal"
      >
        Preorder
      </button>
      <button
        className={style.button}
        onClick={onInorder}
        data-tip="In-order traversal"
      >
        Inorder
      </button>
      <button
        className={style.button}
        onClick={onPostorder}
        data-tip="Post-order traversal"
      >
        Postorder
      </button>
      <button
        className={style.button}
        onClick={onFindMin}
        data-tip="Find min node"
      >
        Min
      </button>
      <button
        className={style.button}
        onClick={onFindMax}
        data-tip="Find max node"
      >
        Max
      </button>
      <ReactTooltip
        className={style.tooltip}
        effect="solid"
        place="bottom"
      />
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
  onSearch: PropTypes.func.isRequired,
  onFindMin: PropTypes.func.isRequired,
  onFindMax: PropTypes.func.isRequired,
  onInorder: PropTypes.func.isRequired,
  onPostorder: PropTypes.func.isRequired,
  onPreorder: PropTypes.func.isRequired,
};

export default Controls;
