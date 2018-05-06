import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Graph from '../components/Graph';

import { nodesFavoriteColor } from '../constants/';
import BinTree from '../libs/bintrees/BinTree';

class BinaryTreeContainer extends Component {
  state = {
    step: 0,
    history: [
      {
        nodes: [
          { id: 1, label: 'Node 1', color: nodesFavoriteColor },
          { id: 2, label: 'Node 2', color: nodesFavoriteColor },
          { id: 3, label: 'Node 3' },
          { id: 4, label: 'Node 4', color: nodesFavoriteColor },
          { id: 5, label: 'Node 5' },
          { id: 6, label: 'Node 6' },
        ],
        edges: [
          { from: 1, to: 2 },
          { from: 1, to: 3 },
          { from: 2, to: 4 },
          { from: 2, to: 5 },
          { from: 3, to: 6 },
        ],
      },
    ],
  }

  componentDidMount() {
    this.initializeTree();
  }

  initializeTree = () => {
    this.setState({
      tree: new BinTree(this.state.history),
    });
  }

  nextStep = () => {
    const { step, history } = this.state;

    if (step + 1 < history.length) {
      this.setState({ step: this.step + 1 });
    }
  }

  prevStep = () => {
    const { step } = this.state;

    if (step - 1 >= 0) {
      this.setState({ step: this.step - 1 });
    }
  }

  render() {
    const { history, step } = this.state;

    return (
      <section>
        <Helmet>
          <title>Binary tree</title>
        </Helmet>

        <Graph
          graph={history[step]}
        />
      </section>
    );
  }
}

export default BinaryTreeContainer;
