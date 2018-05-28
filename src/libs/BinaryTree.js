// https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(history, step) {
    this.root = null;
    this.history = history;

    if (!step) {
      const { nodes } = history[history.length - 1];

      this.algoritmLegend = history[history.length - 1].legend ? [ ...history[history.length - 1].legend ] : [];

      this.history.pop();
      nodes.forEach(node => this.initialInsert(node.id));

      this.treeToHistory();
    } else {
      const { nodes } = history[step];

      this.algoritmLegend = history[step].legend ? [ ...history[step].legend ] : [];

      nodes.forEach(node => this.initialInsert(node.id));

      this.treeToHistory(step);
    }
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

    this.preorder(snapshot, null, this.root);

    if (!step) {
      this.history.push(snapshot);
    } else {
      this.history[step] = snapshot;
    }
  }

  initialInsert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.initialInsertNode(this.root, newNode);
    }
  }

  initialInsertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.initialInsertNode(node.left, newNode);
      }
    } else if (node.right === null) {
      node.right = newNode;
    } else {
      this.initialInsertNode(node.right, newNode);
    }
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.algoritmLegend.push({
        node: newNode.data,
        description: `Inserting the new node ${data}`,
      });
      this.insertNode(this.root, newNode);
    }

    this.treeToHistory();
  }

  insertNode(node, newNode) {
    const legend = {
      node: null,
      description: '',
    };

    if (newNode.data < node.data) {
      legend.node = node.data;
      legend.description = `New node ${newNode.data} < node ${node.data}`;

      if (node.left === null) {
        node.left = newNode;

        legend.description = legend.description + `, and left leaf is empty => node ${node.data} left leaf = node ${newNode.data}. Node inserted!`;

        this.algoritmLegend.push(legend);
      } else {
        legend.description = legend.description + `, and left leaf is not empty => go to the left subtree`;

        this.algoritmLegend.push(legend);

        this.insertNode(node.left, newNode);
      }
    } else if (node.right === null) {
      node.right = newNode;

      legend.node = node.data;
      legend.description = `New node ${newNode.data} > node ${node.data}, and right leaf is empty => node ${node.data} right leaf = node ${newNode.data}. Node inserted!`;

      this.algoritmLegend.push(legend);
    } else {
      legend.node = node.data;
      legend.description = `New node ${newNode.data} > node ${node.data}, and right leaf is not empty => go to the right subtree`;

      this.algoritmLegend.push(legend);

      this.insertNode(node.right, newNode);
    }
  }

  remove(data) {
    const legend = {
      node: data,
      description: `Deleting the node ${data}`,
    };
    this.algoritmLegend.push(legend);

    this.root = this.removeNode(this.root, data);
    this.treeToHistory();
  }

  removeNode(node, key) {
    const legend = {
      node: null,
      description: '',
    };

    if (node === null) {
      legend.description = 'Tree is empty!';
      this.algoritmLegend.push(legend);

      return null;
    }

    if (key < node.data) {
      legend.node = node.data;
      legend.description = `Value ${key} < node ${node.data} => go to the left subtree`;
      this.algoritmLegend.push(legend);
      node.left = this.removeNode(node.left, key);

      return node;
    }

    if (key > node.data) {
      legend.node = node.data;
      legend.description = `Value ${key} > node ${node.data} => go to the right subtree`;
      this.algoritmLegend.push(legend);
      node.right = this.removeNode(node.right, key);

      return node;
    }

    legend.node = node.data;

    if (node.left === null && node.right === null){
      legend.description = `Value ${key} = node ${node.data} and node have not children => node ${node.data} = null. Node removed!`;
      this.algoritmLegend.push(legend);
      node = null;
      return node;
    }

    if (node.left === null) {
      legend.description = `Value ${key} = node ${node.data} and node have right children => node ${node.data} = right subtree. Node removed!`;
      this.algoritmLegend.push(legend);
      node = node.right;

      return node;
    }

    if (node.right === null) {
      legend.description = `Value ${key} = node ${node.data} and node have left children => node ${node.data} = left subtree. Node removed!`;
      this.algoritmLegend.push(legend);
      node = node.left;

      return node;
    }

    const aux = this.findMinNode(node.right);

    legend.description = `Value ${key} = node ${node.data} and node have two children => node ${node.data} = min node from right subtree(node ${aux.data}). Then delete node ${aux.data} from right subtree`;
    this.algoritmLegend.push(legend);

    node.data = aux.data;
    node.right = this.removeNode(node.right, aux.data);

    return node;
  }

  preorder(snapshot, prevNode, currentNode) {
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

      this.preorder(snapshot, currentNode, currentNode.left);
      this.preorder(snapshot, currentNode, currentNode.right);
    }
  }

  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
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

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  findMaxNode(node) {
    if (node.right === null) {
      return node;
    } else {
      return this.findMaxNode(node.right);
    }
  }
}

export default BinarySearchTree;
