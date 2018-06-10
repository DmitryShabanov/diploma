import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { translate } from 'react-i18next';

import BinarySearchTree from '../libs/BinaryTree';

import Graph from '../components/Graph';
import Legend from '../components/Legend';

import style from './BinaryTreeContainer.scss';

class BinaryTreeContainer extends Component {
  constructor(props) {
    super(props);

    const { t } = props;

    this.state = {
      isLoaded: false,
      nodeValue: '',
      step: 0,
      history: [
        {
          nodes: [
            { id: 15 },
            { id: 25 },
            { id: 10 },
            { id: 7 },
            { id: 22 },
            { id: 17 },
            { id: 13 },
            { id: 5 },
            { id: 9 },
            { id: 28 },
          ],
          edges: [],
          legend: [{ node: -1, description: this.props.t('legend.initialized') }],
        },
      ],
      translations: {
        i1: t('binary.i1'),
        i2: t('binary.i2'),
        i3: t('binary.i3'),
        i4: t('binary.i4'),
        i5: t('binary.i5'),
        i6: t('binary.i6'),
        i7: t('binary.i7'),
        i8: t('binary.i8'),
        i9: t('binary.i9'),
        i10: t('binary.i10'),
        i11: t('binary.i11'),
        r1: t('binary.r1'),
        r2: t('binary.r2'),
        r3: t('binary.r3'),
        r4: t('binary.r4'),
        r5: t('binary.r5'),
        r6: t('binary.r6'),
        r7: t('binary.r7'),
        r8: t('binary.r8'),
        r9: t('binary.r9'),
        r10: t('binary.r10'),
        r11: t('binary.r11'),
        r12: t('binary.r12'),
        r13: t('binary.r13'),
        r14: t('binary.r14'),
        r15: t('binary.r15'),
        r16: t('binary.r16'),
        o1: t('binary.o1'),
        o2: t('binary.o2'),
        o3: t('binary.o3'),
        o4: t('binary.o4'),
        s1: t('binary.s1'),
        s2: t('binary.s2'),
        s3: t('binary.s3'),
        s4: t('binary.s4'),
        s5: t('binary.s5'),
        s6: t('binary.s6'),
        s7: t('binary.s7'),
        s8: t('binary.s8'),
        s9: t('binary.s9'),
        s10: t('binary.s10'),
        s11: t('binary.s11'),
        s12: t('binary.s12'),
        s13: t('binary.s13'),
        s14: t('binary.s14'),
        s15: t('binary.s15'),
        s16: t('binary.s16'),
        s17: t('binary.s17'),
        s18: t('binary.s18'),
      },
    };
  }

  componentDidMount() {
    this.initializeTree();
  }

  initializeTree = () => {
    const { history } = this.state;

    this.setState({
      tree: new BinarySearchTree(history, undefined, this.state.translations),
      isLoaded: true,
    });
  }

  changeNodeValue = (value) => {
    this.setState({
      nodeValue: value,
    });
  }

  nextStep = () => {
    const { step, history } = this.state;

    if (step + 1 < history.length) {
      this.setState({
        step: step + 1,
        tree: new BinarySearchTree(history, step + 1, this.state.translations),
      });
    }
  }

  prevStep = () => {
    const { step, history } = this.state;

    if (step - 1 >= 0) {
      this.setState({
        step: step - 1,
        tree: new BinarySearchTree(history, step - 1, this.state.translations),
      });
    }
  }

  addNode = (value) => {
    const { tree, step, history } = this.state;
    const node = Number(value);
    let isIncludes = false;

    if (node && typeof node === 'number' && !isNaN(node)) {
      history[step].nodes.forEach((item) => {
        if (item.id === node) {
          isIncludes = true;
        }
      });

      if (isIncludes) {
        this.setState({
          nodeValue: '',
        });
        return null;
      }

      if (step < history.length - 1) {
        const newHistory = history.slice(0, step + 1);
        const newTree = new BinarySearchTree(newHistory, step, this.state.translations);

        newTree.insert(node);

        this.setState({
          history: newHistory,
          tree: newTree,
          step: step + 1,
          nodeValue: '',
        });
      } else {
        tree.insert(node);

        this.setState({
          step: step + 1,
          nodeValue: '',
        });
      }
    } else {
      this.setState({
        nodeValue: '',
      });
    }

    return null;
  }

  removeNode = (value) => {
    const { tree, step, history } = this.state;
    const node = Number(value);
    let isIncludes = false;

    if (node && typeof node === 'number' && !isNaN(node)) {
      history[step].nodes.forEach((item) => {
        if (item.id === node) {
          isIncludes = true;
        }
      });

      if (!isIncludes) {
        this.setState({
          nodeValue: '',
        });
        return null;
      }

      if (step < history.length - 1) {
        const newHistory = history.slice(0, step + 1);
        const newTree = new BinarySearchTree(newHistory, step, this.state.translations);

        newTree.remove(node);

        this.setState({
          history: newHistory,
          tree: newTree,
          step: step + 1,
          nodeValue: '',
        });
      } else {
        tree.remove(node);

        this.setState({
          step: step + 1,
          nodeValue: '',
        });
      }
    } else {
      this.setState({
        nodeValue: '',
      });
    }

    return null;
  }

  searchNode = (value) => {
    const { tree, step, history } = this.state;
    const node = Number(value);

    if (!node || typeof node !== 'number' || isNaN(node)) {
      this.setState({
        nodeValue: '',
      });
      return null;
    }

    if (step < history.length - 1) {
      const newHistory = history.slice(0, step + 1);
      const newTree = new BinarySearchTree(newHistory, step, this.state.translations);

      newTree.find(node);

      this.setState({
        history: newHistory,
        tree: newTree,
        step: step + 1,
        nodeValue: '',
      });
    } else {
      tree.find(node);

      this.setState({
        step: step + 1,
        nodeValue: '',
      });
    }

    return null;
  }

  findMin = () => {
    const { tree, step, history } = this.state;

    if (step < history.length - 1) {
      const newHistory = history.slice(0, step + 1);
      const newTree = new BinarySearchTree(newHistory, step, this.state.translations);

      newTree.findMin();

      this.setState({
        history: newHistory,
        tree: newTree,
        step: step + 1,
      });
    } else {
      tree.findMin();

      this.setState({
        step: step + 1,
      });
    }

    return null;
  }

  findMax = () => {
    const { tree, step, history } = this.state;

    if (step < history.length - 1) {
      const newHistory = history.slice(0, step + 1);
      const newTree = new BinarySearchTree(newHistory, step, this.state.translations);

      newTree.findMax();

      this.setState({
        history: newHistory,
        tree: newTree,
        step: step + 1,
      });
    } else {
      tree.findMax();

      this.setState({
        step: step + 1,
      });
    }

    return null;
  }

  inorder = () => {
    const { tree, step, history } = this.state;

    if (step < history.length - 1) {
      const newHistory = history.slice(0, step + 1);
      const newTree = new BinarySearchTree(newHistory, step, this.state.translations);

      newTree.runInorder();

      this.setState({
        history: newHistory,
        tree: newTree,
        step: step + 1,
      });
    } else {
      tree.runInorder();

      this.setState({
        step: step + 1,
      });
    }

    return null;
  }

  postorder = () => {
    const { tree, step, history } = this.state;

    if (step < history.length - 1) {
      const newHistory = history.slice(0, step + 1);
      const newTree = new BinarySearchTree(newHistory, step, this.state.translations);

      newTree.runPostorder();

      this.setState({
        history: newHistory,
        tree: newTree,
        step: step + 1,
      });
    } else {
      tree.runPostorder();

      this.setState({
        step: step + 1,
      });
    }

    return null;
  }

  preorder = () => {
    const { tree, step, history } = this.state;

    if (step < history.length - 1) {
      const newHistory = history.slice(0, step + 1);
      const newTree = new BinarySearchTree(newHistory, step, this.state.translations);

      newTree.runPreorder();

      this.setState({
        history: newHistory,
        tree: newTree,
        step: step + 1,
      });
    } else {
      tree.runPreorder();

      this.setState({
        step: step + 1,
      });
    }

    return null;
  }

  render() {
    const {
      changeNodeValue,
      nextStep,
      prevStep,
      addNode,
      removeNode,
      searchNode,
      findMin,
      findMax,
      inorder,
      postorder,
      preorder,
    } = this;

    const {
      isLoaded,
      nodeValue,
      history,
      step,
    } = this.state;

    const { t } = this.props;

    if (!isLoaded) {
      return null;
    }

    return (
      <section className={style.container}>
        <Helmet>
          <title>{t('binary.title')}</title>
        </Helmet>

        <div className={style.content}>
          <Legend legend={history[step].legend} />
          <Graph
            graph={history[step]}
            node={nodeValue}
            onChangeNode={changeNodeValue}
            onNext={nextStep}
            onPrev={prevStep}
            onAdd={() => addNode(nodeValue)}
            onRemove={() => removeNode(nodeValue)}
            onSearch={() => searchNode(nodeValue)}
            onFindMin={findMin}
            onFindMax={findMax}
            onInorder={inorder}
            onPostorder={postorder}
            onPreorder={preorder}
          />
        </div>
      </section>
    );
  }
}

BinaryTreeContainer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate()(BinaryTreeContainer);
