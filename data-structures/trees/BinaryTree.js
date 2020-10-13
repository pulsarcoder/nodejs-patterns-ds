class BinaryTree {
    constructor(data, leftNode = null, rightNode = null) {
        this.data = data;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }

    withLeft(leftNode) {
        this.leftNode = leftNode;
        return this.leftNode;
    }

    withRight(rightNode) {
        this.rightNode = rightNode;
        return this.rightNode;
    }
}

class BinaryTreeTraversal {    

    min(root) {
        if (!root) {
            return;
        }
        return root.leftNode ? this.min(root.leftNode) : root.data;
    }

    max(root) {
        if (!root) {
            return;
        }
        return root.rightNode ? this.max(root.rightNode) : root.data;
    }

    bstInsert(root, data) {
        if (!root) {
            return new BinaryTree(data);
        } 
        if (data < root.data) {
            root.leftNode = this.bstInsert(root.leftNode, data);
        } else { // if (data > root.data) {
            root.rightNode = this.bstInsert(root.rightNode, data);
        }
        return root;
    }

    printPreOrder(node) {
        if (!node)
            return;
        console.log(node.data);
        this.printPreOrder(node.leftNode);
        this.printPreOrder(node.rightNode);
    }

    printInOrder(node) {
        if (!node)
            return;
        this.printPreOrder(node.leftNode);
        console.log(node.data);
        this.printPreOrder(node.rightNode);
    }

    printPostOrder(node) {
        if (!node)
            return;
        this.printPreOrder(node.leftNode);
        this.printPreOrder(node.rightNode);
        console.log(node.data);
    }

    printSumOfEachSubTree(node) {
        const stack = [];
        this.sum(node, (subTreeTotal) => stack.push(subTreeTotal))
        stack.pop();
        return stack;
    }

    sum(node, subTreeCallback = undefined) {
        if (!node)
            return 0;
        const total = this.sum(node.leftNode, subTreeCallback) + this.sum(node.rightNode, subTreeCallback) + (node.data);
        if (subTreeCallback) {
            subTreeCallback(total);
        }
        return total;
    }

    printLevelOrderWithQueue(node) {
        // create an empty queue
        const queue = [];
        // temp_node = root
        let tempNode = node;
        // loop until tempNode is null
        while (tempNode) { // tempNode is not null
            console.log(tempNode.data);
            if (tempNode.leftNode) {
                queue.push(tempNode.leftNode)
            }
            if (tempNode.rightNode) {
                queue.push(tempNode.rightNode)
            }
            tempNode = queue.shift();
        }
    }
}

module.exports = {
    BinaryTree,
    BinaryTreeTraversal
}