import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Graph from '../components/Graph';

import { nodesFavoriteColor } from '../constants/';

class BinaryTreeContainer extends Component {
  state = {
    graph: {
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
  }

  render() {
    return (
      <section>
        <Helmet>
          <title>Binary tree</title>
        </Helmet>

        <Graph
          graph={this.state.graph}
        />
      </section>
    );
  }
}

export default BinaryTreeContainer;
