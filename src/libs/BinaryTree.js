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

      this.history.pop();
      nodes.forEach(node => this.initialInsert(node.id));

      this.treeToHistory();
    } else {
      const { nodes } = history[step];

      nodes.forEach(node => this.initialInsert(node.id));

      this.treeToHistory(step);
    }
  }

  // convert tree to history
  treeToHistory(step) {
    const snapshot = {
      nodes: [],
      edges: [],
    };

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
        this.insertNode(node.left, newNode);
      }
    } else if (node.right === null) {
      node.right = newNode;
    } else {
      this.insertNode(node.right, newNode);
    }
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }

    this.treeToHistory();
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else if (node.right === null) {
      node.right = newNode;
    } else {
      this.insertNode(node.right, newNode);
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
    this.treeToHistory();
  }

  removeAll() {
    this.root = null;
    this.treeToHistory();
  }

  removeNode(node, key) {
    if (node === null) {
      return null;
    }

    if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    }

    if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    }

    if (node.left === null && node.right === null){
      node = null;
      return node;
    }

    if (node.left === null) {
      node = node.right;
      return node;
    }

    if (node.right === null) {
      node = node.left;
      return node;
    }

    const aux = this.findMinNode(node.right);
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
    }
  }

  search(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      return this.search(node.left, data);
    }

    if (data > node.data) {
      return this.search(node.right, data);
    }

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