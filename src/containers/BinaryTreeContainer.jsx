import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Graph from '../components/Graph';

import { nodesFavoriteColor } from '../constants/';
// import BinTree from '../libs/bintrees/BinTree';
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

  changeNodeValue = (value) => {
    this.setState({
      nodeValue: value,
    });
  }

  initializeTree = () => {
    this.setState({
      tree: new BinarySearchTree(this.state.history),
      isLoaded: true,
    });
  }

  nextStep = () => {
    const { step, history } = this.state;

    if (step + 1 < history.length) {
      this.setState({
        step: step + 1,
        tree: new BinarySearchTree(this.state.history, this.step + 1),
      });
    }
  }

  prevStep = () => {
    const { step } = this.state;

    if (step - 1 >= 0) {
      this.setState({
        step: step - 1,
        tree: new BinarySearchTree(this.state.history, this.step - 1),
      });
    }
  }

  addNode = (value) => {
    const { tree, step, history } = this.state;

    if (step < history.length - 1) {
      this.setState({
        history: history.slice(step),
      });
    }

    this.setState({
      nodeValue: '',
    });

    tree.insert(Number(value));
    this.nextStep();
  }

  removeNode = (value) => {
    const { tree, step, history } = this.state;

    if (step < history.length - 1) {
      this.setState({
        history: history.slice(step),
      });
    }

    this.setState({
      nodeValue: '',
    });

    tree.remove(Number(value));
    this.nextStep();
  }

  removeAll = () => {
    const { tree, step, history } = this.state;

    if (step < history.length - 1) {
      this.setState({
        history: history.slice(step),
      });
    }

    this.setState({
      nodeValue: '',
    });

    tree.removeAll();
    this.nextStep();
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
