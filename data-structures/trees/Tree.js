class Tree {
    constructor(data, children = []) {
        this.data = data;
        this.children = children;
    }
}

class TreeTraversal {

    /**
     * 
     * @param {Array<Number>} parent 
     * @param {Array<Number>} data 
     */
    createTreeFromParentArray(parent, data) {
        if ((!parent || !data) && (parent.length !== data.length)) {
            return;
        }
        let nodesCount = 0;
        const root = new Tree(data[nodesCount]); // always 0 will be root
        parent.shift(); // remove the first element which is -1
        while(nodesCount < parent.length) {
            const children = parent.filter(p => p === nodesCount);
            children.forEach(() => {
                root.children.push(new Tree(data[++nodesCount]));
            });
            parent.splice(0, children.length); // remove first k elements from parent
        }
        return root;
    }

    printDFS(node) {
        if (!node)
            return;
        console.log(node.data);
        if (node.children && node.children.length) {
            for (let i = 0; i < node.children.length - 1; i++) {
                this.printDFS(node.children[i]);
            }
        }
    }

    printBFS(node) {
        const queue = [];
        let tempNode = node;
        while (tempNode) {
            console.log(tempNode.data);
            if (tempNode.children && tempNode.children.length) {
                queue.push(...tempNode.children);
            }
            tempNode = queue.shift();
        }
    }
}

module.exports = {
    Tree,
    TreeTraversal,
    createTreeFromParentArray
}