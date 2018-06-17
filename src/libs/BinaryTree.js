class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(history, step, translations) {
    this.root = null;
    this.history = history;
    this.translations = translations;

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

    this.initialPreorder(snapshot, null, this.root);

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
        description: `${this.translations.i1} ${data}`,
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
      legend.description = `${this.translations.i2} ${newNode.data} ${this.translations.i3} ${node.data}`;

      if (node.left === null) {
        node.left = newNode;

        legend.description = legend.description + `${this.translations.i4} ${node.data} ${this.translations.i5} ${newNode.data}. ${this.translations.i6}`;

        this.algoritmLegend.push(legend);
      } else {
        legend.description = legend.description + this.translations.i7;

        this.algoritmLegend.push(legend);

        this.insertNode(node.left, newNode);
      }
    } else if (node.right === null) {
      node.right = newNode;

      legend.node = node.data;
      legend.description = `${this.translations.i2} ${newNode.data} ${this.translations.i8} ${node.data}, ${this.translations.i9} ${node.data} ${this.translations.i10} ${newNode.data}. ${this.translations.i6}`;

      this.algoritmLegend.push(legend);
    } else {
      legend.node = node.data;
      legend.description = `${this.translations.i2} ${newNode.data} ${this.translations.i8} ${node.data}, ${this.translations.i11}`;

      this.algoritmLegend.push(legend);

      this.insertNode(node.right, newNode);
    }
  }

  remove(data) {
    const legend = {
      node: data,
      description: `${this.translations.r1} ${data}`,
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
      legend.description = this.translations.r2;
      this.algoritmLegend.push(legend);

      return null;
    }

    if (key < node.data) {
      legend.node = node.data;
      legend.description = `${this.translations.r3} ${key} ${this.translations.i3} ${node.data} ${this.translations.r4}`;
      this.algoritmLegend.push(legend);
      node.left = this.removeNode(node.left, key);

      return node;
    }

    if (key > node.data) {
      legend.node = node.data;
      legend.description = `${this.translations.r3} ${key} ${this.translations.i8} ${node.data} ${this.translations.r5}`;
      this.algoritmLegend.push(legend);
      node.right = this.removeNode(node.right, key);

      return node;
    }

    legend.node = node.data;

    if (node.left === null && node.right === null){
      legend.description = `${this.translations.r3} ${key} ${this.translations.r6} ${node.data} ${this.translations.r7} ${node.data} ${this.translations.r8}`;
      this.algoritmLegend.push(legend);
      node = null;
      return node;
    }

    if (node.left === null) {
      legend.description = `${this.translations.r3} ${key} ${this.translations.r6} ${node.data} ${this.translations.r9} ${node.data} `;
      this.algoritmLegend.push(legend);
      node = node.right;

      return node;
    }

    if (node.right === null) {
      legend.description = `${this.translations.r3} ${key} ${this.translations.r6} ${node.data} ${this.translations.r11} ${node.data} ${this.translations.r12}`;
      this.algoritmLegend.push(legend);
      node = node.left;

      return node;
    }

    const aux = this.findMinNodeInitial(node.right);

    legend.description = `${this.translations.r3} ${key} ${this.translations.r6} ${node.data} ${this.translations.r13} ${node.data} ${this.translations.r14} ${aux.data} ${this.translations.r15} ${aux.data} ${this.translations.r16}`;
    this.algoritmLegend.push(legend);

    node.data = aux.data;
    node.right = this.removeNode(node.right, aux.data);

    return node;
  }

  initialPreorder(snapshot, prevNode, currentNode) {
    if (currentNode !== null) {
      snapshot.nodes.push({
        id: currentNode.data,
        label: String(currentNode.data),
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

  runPreorder() {
    const legend = {
      node: this.root.data,
      description: this.translations.o1,
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

      legend.description = `${this.translations.o2} ${node.data}`;
      this.algoritmLegend.push({ ... legend });

      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  runInorder() {
    const legend = {
      node: this.root.data,
      description: this.translations.o3,
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

      legend.description = `${this.translations.o2} ${node.data}`;
      this.algoritmLegend.push({ ... legend });

      this.inorder(node.right);
    }
  }

  runPostorder() {
    const legend = {
      node: this.root.data,
      description: this.translations.o4,
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

      legend.description = `${this.translations.o2} ${node.data}`;
      this.algoritmLegend.push({ ... legend });
    }
  }

  find(node) {
    const legend = {
      node: node,
      description: `${this.translations.s1} ${node}`,
    };
    this.algoritmLegend.push(legend);
    this.search(this.root, node);
  }

  search(node, data) {
    const legend = {
      node: null,
      description: `${this.translations.s1} ${data}`,
    };

    if (node === null) {
      legend.description = this.translations.s2;
      this.algoritmLegend.push(legend);
      this.treeToHistory();

      return null;
    }

    if (data < node.data) {
      legend.node = node.data;
      legend.description = `${this.translations.s3} ${data} ${this.translations.i3} ${node.data} ${this.translations.s4}`;
      this.algoritmLegend.push(legend);

      return this.search(node.left, data);
    }

    if (data > node.data) {
      legend.node = node.data;
      legend.description = `${this.translations.s3} ${data} ${this.translations.i8} ${node.data} ${this.translations.s5}`;
      this.algoritmLegend.push(legend);

      return this.search(node.right, data);
    }

    legend.node = node.data;
    legend.description = `${this.translations.s3} ${data} ${this.translations.r6} ${node.data} ${this.translations.s6}`;
    this.algoritmLegend.push(legend);
    this.treeToHistory();

    return node;
  }

  findMinNodeInitial(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNodeInitial(node.left);
    }
  }

  findMin() {
    const legend = {
      node: this.root.data,
      description: this.translations.s7,
    };
    this.algoritmLegend.push({ ...legend });

    const node = this.findMinNode(this.root);

    legend.node = node.data;
    legend.description = this.translations.s8;
    this.algoritmLegend.push({ ...legend });

    this.treeToHistory();
  }

  findMinNode(node) {
    const legend = {
      node: node.data,
      description: '',
    };

    if (node.left === null) {
      legend.description = `${this.translations.s9} ${node.data} ${this.translations.s10} ${node.data}`;
      this.algoritmLegend.push(legend);

      return node;
    } else {
      legend.description = `${this.translations.s11} ${node.data} ${this.translations.s12}`;
      this.algoritmLegend.push(legend);

      return this.findMinNode(node.left);
    }
  }

  findMax() {
    const legend = {
      node: this.root.data,
      description: this.translations.s13,
    };
    this.algoritmLegend.push({ ...legend });

    const node = this.findMaxNode(this.root);

    legend.node = node.data;
    legend.description = this.translations.s14;
    this.algoritmLegend.push({ ...legend });

    this.treeToHistory();
  }

  findMaxNode(node) {
    const legend = {
      node: node.data,
      description: '',
    };

    if (node.right === null) {
      legend.description = `${this.translations.s15} ${node.data} ${this.translations.s16} ${node.data}`;
      this.algoritmLegend.push(legend);

      return node;
    } else {
      legend.description = `${this.translations.s17} ${node.data} ${this.translations.s18}`;
      this.algoritmLegend.push(legend);

      return this.findMaxNode(node.right);
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

export default BinarySearchTree;
