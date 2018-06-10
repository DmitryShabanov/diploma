import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import { translate } from 'react-i18next';

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
    t,
  } = props;

  return (
    <div className={style.container}>
      <input
        className={style.input}
        type="text"
        placeholder={t('controls.node')}
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
        data-tip={t('controls.addE')}
      >
        {t('controls.add')}
      </button>
      <button
        className={style.button}
        onClick={onRemove}
        data-tip={t('controls.deleteE')}
      >
        {t('controls.delete')}
      </button>
      <button
        className={style.button}
        onClick={onSearch}
        data-tip={t('controls.searcheE')}
      >
        {t('controls.searche')}
      </button>
      <button
        className={style.button}
        onClick={onPrev}
        data-tip={t('controls.prevE')}
      >
        {t('controls.prev')}
      </button>
      <button
        className={style.button}
        onClick={onNext}
        data-tip={t('controls.nextE')}
      >
        {t('controls.next')}
      </button>
      <button
        className={style.button}
        onClick={onPreorder}
        data-tip={t('controls.preorderE')}
      >
        {t('controls.preorder')}
      </button>
      <button
        className={style.button}
        onClick={onInorder}
        data-tip={t('controls.inorderE')}
      >
        {t('controls.inorder')}
      </button>
      <button
        className={style.button}
        onClick={onPostorder}
        data-tip={t('controls.postorderE')}
      >
        {t('controls.postorder')}
      </button>
      <button
        className={style.button}
        onClick={onFindMin}
        data-tip={t('controls.minE')}
      >
        {t('controls.min')}
      </button>
      <button
        className={style.button}
        onClick={onFindMax}
        data-tip={t('controls.maxE')}
      >
        {t('controls.max')}
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
  t: PropTypes.func.isRequired,
};

export default translate()(Controls);
