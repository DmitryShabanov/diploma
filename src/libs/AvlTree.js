class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.height = 0;
  }
}

class AVLTree {
  constructor(history, step) {
    this.root = null;
    this.history = history;

    if (!step) {
      const { nodes } = history[history.length - 1];

      this.algoritmLegend = history[history.length - 1].legend ? [ ...history[history.length - 1].legend ] : [];

      this.history.pop();
      nodes.forEach(node => this.initialAddNode(node.id));

      this.treeToHistory();
    } else {
      const { nodes } = history[step];

      this.algoritmLegend = history[step].legend ? [ ...history[step].legend ] : [];

      nodes.forEach(node => this.initialAddNode(node.id));

      this.treeToHistory(step);
    }
  }

  print() {
    console.log(JSON.stringify(this.root));
  }

    // convert tree to history
  treeToHistory(step) {
    const snapshot = {
      nodes: [],
      edges: [],
      legend: [
        ...this.algoritmLegend,
      ],
    };

    this.algoritmLegend = [];

    this.initialPreorder(snapshot, null, this.root);

    snapshot.nodes.sort((a, b) => a.id < b.id ? 1 : -1);

    if (!step) {
      this.history.push(snapshot);
    } else {
      this.history[step] = snapshot;
    }
  }

  initialPreorder(snapshot, prevNode, currentNode) {
    if (currentNode !== null) {
      snapshot.nodes.push({
        id: currentNode.data,
        label: `Node ${currentNode.data}`,
      });

      if (prevNode !== null) {
        snapshot.edges.push({
          from: prevNode.data,
          to: currentNode.data,
        });
      }

      this.initialPreorder(snapshot, currentNode, currentNode.left);
      this.initialPreorder(snapshot, currentNode, currentNode.right);
    }
  }

  initialAddNode(data) {
    this.root = this.initialPutNode(this.root, data);
  }

  initialPutNode(node, data) {
    if (!node) {
      return new Node(data);
    }

    if (node.data > data) {
      node.left = this.initialPutNode(node.left, data);
    } else if (node.data < data) {
      node.right = this.initialPutNode(node.right, data);
    } else if (node.data === data){
      node.data = data;
    }

    node.height = 1 + this.getSize(node.left) + this.getSize(node.right);

    return this.balance(node);
  }

  // AVL
  addNode(data) {
    this.root = this.putNode(this.root, data);
  }

  // AVL
  putNode(node, data) {
    if (!node) {
      return new Node(data);
    }

    if (node.data > data) {
      node.left = this.putNode(node.left, data);
    } else if (node.data < data) {
      node.right = this.putNode(node.right, data);
    } else if (node.data === data){
      node.data = data;
    }

    node.height = 1 + this.getSize(node.left) + this.getSize(node.right);

    return this.balance(node);
  }

  // AVL
  deleteNode(data) {
    this.root = this.removeNode(this.root, data);
  }

  // AVL
  removeNode(node, data) {
    if (!node) {
      return null;
    }

    if (node.data > data) {
      node.left = this.removeNode(node.left, data);
    } else if (node.data < data) {
      node.right = this.removeNode(node.right, data);
    } else {
      if (!node.right) {
        return node.left;
      }

      if (!node.left) {
        return node.right;
      }

      const temp = node;

      node = this.getMin(temp.right);
      node.right = this.deleteMin(temp.right);
      node.left = temp.left;

      return this.balance(node);
    }

    return this.balance(node);
  }

  // AVL
  correctHeight(node) {
    const heightLeft = this.getSize(node.left);
    const heightRight = this.getSize(node.right);

    node.height = heightLeft > heightRight ? heightLeft + 1 : heightRight + 1;
  }

  // AVL
  bfactor(node) {
    return this.getSize(node.right) - this.getSize(node.left);
  }

  // AVL
  balance(node) {
    this.correctHeight(node);

    if (this.bfactor(node) === 2) {
      if (this.bfactor(node.right) < 0) {
        node.right = this.rotateRight(node.right);
      }

      return this.rotateLeft(node);
    }

    if (this.bfactor(node) === -2) {
      if (this.bfactor(node.left) > 0) {
        node.left = this.rotateLeft(node.left);
      }

      return this.rotateRight(node);
    }

    return node;
  }

  // AVL
  deleteMin(node) {
    if (node.left === null) {
      return node.right;
    }

    node.left = this.deleteMin(node.left);
    node.height = 1 + this.getSize(node.left) + this.getSize(node.right);

    return node;
  }

  getMin(node) {
    if (!node.left) {
      return node;
    }

    return this.getMin(node.left)
  }

  // AVL
  rotateRight(node) {
    const temp = node.left;

    node.left = temp.right;
    temp.right = node;

    this.correctHeight(node);
    this.correctHeight(temp);

    return temp;
  }

  // AVL
  rotateLeft(node) {
    const temp = node.right;

    temp.right = node.left;
    node.left = node;

    this.correctHeight(node);
    this.correctHeight(temp);

    return node;
  }

  getSize(node){
    if (!node) {
      return 0;
    }

    return node.height;
  }

  find(node) {
    const legend = {
      node: node,
      description: `Searching the node ${node}`,
    };
    this.algoritmLegend.push(legend);
    this.search(this.root, node);
  }

  search(node, data) {
    const legend = {
      node: null,
      description: `Searching the node ${data}`,
    };

    if (node === null) {
      legend.description = `There is no node in the tree!`
      this.algoritmLegend.push(legend);
      this.treeToHistory();

      return null;
    }

    if (data < node.data) {
      legend.node = node.data;
      legend.description = `Searched node ${data} < node ${node.data} => continue search in the left subtree`;
      this.algoritmLegend.push(legend);

      return this.search(node.left, data);
    }

    if (data > node.data) {
      legend.node = node.data;
      legend.description = `Searched node ${data} > node ${node.data} => continue search in the right subtree`;
      this.algoritmLegend.push(legend);

      return this.search(node.right, data);
    }

    legend.node = node.data;
    legend.description = `Searched node ${data} = node ${node.data} => node is found!`;
    this.algoritmLegend.push(legend);
    this.treeToHistory();

    return node;
  }

  findMin() {
    const legend = {
      node: this.root.data,
      description: 'Searching the min node',
    };
    this.algoritmLegend.push({ ...legend });

    const node = this.findMinNode(this.root);

    legend.node = node.data;
    legend.description = 'The min node found!';
    this.algoritmLegend.push({ ...legend });

    this.treeToHistory();
  }

  findMinNode(node) {
    const legend = {
      node: node.data,
      description: '',
    };

    if (node.left === null) {
      legend.description = `Left child of the node ${node.data} is empty => the min node is ${node.data}`;
      this.algoritmLegend.push(legend);

      return node;
    } else {
      legend.description = `Node ${node.data} have a left child => continue search in the left subtree`;
      this.algoritmLegend.push(legend);

      return this.findMinNode(node.left);
    }
  }

  findMax() {
    const legend = {
      node: this.root.data,
      description: 'Searching the max node',
    };
    this.algoritmLegend.push({ ...legend });

    const node = this.findMaxNode(this.root);

    legend.node = node.data;
    legend.description = 'The max node found!';
    this.algoritmLegend.push({ ...legend });

    this.treeToHistory();
  }

  findMaxNode(node) {
    const legend = {
      node: node.data,
      description: '',
    };

    if (node.right === null) {
      legend.description = `Right child of the node ${node.data} is empty => the max node is ${node.data}`;
      this.algoritmLegend.push(legend);

      return node;
    } else {
      legend.description = `Node ${node.data} have a right child => continue search in the right subtree`;
      this.algoritmLegend.push(legend);

      return this.findMaxNode(node.right);
    }
  }

    runPreorder() {
    const legend = {
      node: this.root.data,
      description: 'Pre-order traversal',
    };

    this.algoritmLegend.push(legend);
    this.preorder(this.root);
    this.treeToHistory();
  }

  preorder(node) {
    if (node !== null) {
      let legend = {
        node: node.data,
        description: '',
      };

      legend.description = `Display node ${node.data}`;
      this.algoritmLegend.push({ ... legend });

      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  runInorder() {
    const legend = {
      node: this.root.data,
      description: 'In-order traversal',
    };

    this.algoritmLegend.push(legend);
    this.inorder(this.root);
    this.treeToHistory();
  }

  inorder(node) {
    if (node !== null) {
      let legend = {
        node: node.data,
        description: '',
      };

      this.inorder(node.left);

      legend.description = `Display node ${node.data}`;
      this.algoritmLegend.push({ ... legend });

      this.inorder(node.right);
    }
  }

  runPostorder() {
    const legend = {
      node: this.root.data,
      description: 'Post-order traversal',
    };

    this.algoritmLegend.push(legend);
    this.postorder(this.root);
    this.treeToHistory();
  }

  postorder(node) {
    if (node !== null) {
      let legend = {
        node: node.data,
        description: '',
      };

      this.postorder(node.left);
      this.postorder(node.right);

      legend.description = `Display node ${node.data}`;
      this.algoritmLegend.push({ ... legend });
    }
  }

  getTreeHeight(node) {
    if (node === null) {
      return 0;
    }

    let left, right;

    if (node.left) {
      left = this.getTreeHeight(node.left);
    } else {
      left = -1;
    }

    if (node.right) {
      right = this.getTreeHeight(node.right);
    } else {
      right = -1;
    }

    const max = left > right ? left : right;

    return max + 1;
  }
}

export default AVLTree;
