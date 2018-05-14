import TreeBase from './TreeBase';

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    get_child(dir) {
        return dir ? this.right : this.left;
    }

    set_child(dir, val) {
        if(dir) {
            this.right = val;
        }
        else {
            this.left = val;
        }
    }
}

class BinTree extends TreeBase {
    constructor(history, comparator) {
        console.log('log', history);
        super();

        this._root = null;
        this._comparator = comparator;
        this.size = 0;
    }

    // returns true if inserted, false if duplicate
    insert(data) {
        if(this._root === null) {
            // empty tree
            this._root = new Node(data);
            this.size++;
            return true;
        }

        let dir = 0;

        // setup
        let p = null; // parent
        let node = this._root;

        // search down
        while(true) {
            if(node === null) {
                // insert new node at the bottom
                node = new Node(data);
                p.set_child(dir, node);
                ret = true;
                this.size++;
                return true;
            }

            // stop if found
            if(this._comparator(node.data, data) === 0) {
                return false;
            }

            dir = this._comparator(node.data, data) < 0;

            // update helpers
            p = node;
            node = node.get_child(dir);
        }
    }

    // returns true if removed, false if not found
    remove(data) {
        if(this._root === null) {
            return false;
        }

        const head = new Node(undefined); // fake tree root
        let node = head;
        node.right = this._root;
        let p = null; // parent
        let found = null; // found item
        let dir = 1;

        while(node.get_child(dir) !== null) {
            p = node;
            node = node.get_child(dir);
            const cmp = this._comparator(data, node.data);
            dir = cmp > 0;

            if(cmp === 0) {
                found = node;
            }
        }

        if(found !== null) {
            found.data = node.data;
            p.set_child(p.right === node, node.get_child(node.left === null));

            this._root = head.right;
            this.size--;
            return true;
        }
        else {
            return false;
        }
    }
}

export default BinTree;