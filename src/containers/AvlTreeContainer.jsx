import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import AVLTree from '../libs/AvlTree';

import Graph from '../components/Graph';
import Legend from '../components/Legend';

import style from './AvlTreeContainer.scss';

class AvlTreeContainer extends Component {
  state = {
    isLoaded: false,
    nodeValue: '',
    step: 0,
    history: [
      {
        nodes: [
          { id: 15 },
          { id: 10 },
          { id: 9 },
          { id: 7 },
          { id: 5 },
          { id: 4 },
          { id: 3 },
          { id: 1 },
        ],
        edges: [],
        legend: [{ node: -1, description: 'Tree is initialized.' }],
      },
    ],
  }

  componentDidMount() {
    this.initializeTree();
  }

  initializeTree = () => {
    const { history } = this.state;

    this.setState({
      tree: new AVLTree(history),
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

    // console.log('next history', history[step + 1]);

    if (step + 1 < history.length) {
      this.setState({
        step: step + 1,
        tree: new AVLTree(history, step + 1),
      });
    }
  }

  prevStep = () => {
    const { step, history } = this.state;

    // console.log('prev history', history[step - 1]);

    if (step - 1 >= 0) {
      this.setState({
        step: step - 1,
        tree: new AVLTree(history, step - 1),
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
        const newTree = new AVLTree(newHistory, step);

        newTree.addNode(node);

        this.setState({
          history: newHistory,
          tree: newTree,
          step: step + 1,
          nodeValue: '',
        });
      } else {
        tree.addNode(node);

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
        const newTree = new AVLTree(newHistory, step);

        newTree.deleteNode(node);

        this.setState({
          history: newHistory,
          tree: newTree,
          step: step + 1,
          nodeValue: '',
        });
      } else {
        tree.deleteNode(node);

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
      const newTree = new AVLTree(newHistory, step);

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
      const newTree = new AVLTree(newHistory, step);

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
      const newTree = new AVLTree(newHistory, step);

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
      const newTree = new AVLTree(newHistory, step);

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
      const newTree = new AVLTree(newHistory, step);

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
      const newTree = new AVLTree(newHistory, step);

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

    if (!isLoaded) {
      return null;
    }

    return (
      <section className={style.container}>
        <Helmet>
          <title>AVL tree</title>
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

export default AvlTreeContainer;
