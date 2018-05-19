import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Graph from '../components/Graph';

import { nodesFavoriteColor } from '../constants/';
import BinarySearchTree from '../libs/BinaryTree';

class BinaryTreeContainer extends Component {
  state = {
    isLoaded: false,
    nodeValue: '',

    step: 0,
    history: [
      {
        nodes: [
          { id: 15, label: 'Node 15', color: nodesFavoriteColor },
          { id: 25, label: 'Node 25', color: nodesFavoriteColor },
          { id: 10, label: 'Node 10' },
          { id: 7, label: 'Node 7', color: nodesFavoriteColor },
          { id: 22, label: 'Node 22' },
          { id: 17, label: 'Node 17' },
          { id: 13, label: 'Node 13' },
          { id: 5, label: 'Node 5' },
          { id: 9, label: 'Node 9' },
          { id: 27, label: 'Node 27' },
        ],
        edges: [],
      },
    ],
  }

  componentDidMount() {
    this.initializeTree();
  }

  initializeTree = () => {
    const { history } = this.state;

    this.setState({
      tree: new BinarySearchTree(history),
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
        tree: new BinarySearchTree(history, step + 1),
      });
    }
  }

  prevStep = () => {
    const { step, history } = this.state;

    if (step - 1 >= 0) {
      this.setState({
        step: step - 1,
        tree: new BinarySearchTree(history, step - 1),
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
        const newTree = new BinarySearchTree(newHistory, step);

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
        const newTree = new BinarySearchTree(newHistory, step);

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

  removeAll = () => {
    const { tree, step, history } = this.state;

    if (step < history.length - 1) {
      const newHistory = history.slice(0, step + 1);
      const newTree = new BinarySearchTree(newHistory, step);

      newTree.removeAll();

      this.setState({
        history: newHistory,
        tree: newTree,
        step: step + 1,
        nodeValue: '',
      });
    } else {
      tree.removeAll();

      this.setState({
        step: step + 1,
        nodeValue: '',
      });
    }
  }

  render() {
    const {
      changeNodeValue,
      nextStep,
      prevStep,
      addNode,
      removeNode,
      removeAll,
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
      <section>
        <Helmet>
          <title>Binary tree</title>
        </Helmet>

        <Graph
          graph={history[step]}
          node={nodeValue}
          onChangeNode={changeNodeValue}
          onNext={nextStep}
          onPrev={prevStep}
          onAdd={() => addNode(nodeValue)}
          onRemove={() => removeNode(nodeValue)}
          onClear={removeAll}
        />
      </section>
    );
  }
}

export default BinaryTreeContainer;
