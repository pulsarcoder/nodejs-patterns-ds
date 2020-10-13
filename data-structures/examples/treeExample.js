const { TreeTraversal, Tree } = require("../trees/Tree");
const { treeMock1 } = require("./mock/treeMock");

console.log('Tree with children');
const treeRoot = new Tree(0, [
    new Tree(1, [
        new Tree(5),
        new Tree(6),
        new Tree(7)
    ]),
    new Tree(2),
    new Tree(3),
    new Tree(4, [
        new Tree(8),
        new Tree(9),
        new Tree(10, [
            new Tree(11),
            new Tree(12)
        ])
    ])
])

const treeTraversal = new TreeTraversal();
console.log('Tree Root traversal using DFS');
treeTraversal.printDFS(treeRoot);
console.log('Tree Root traversal using BFS');
treeTraversal.printBFS(treeRoot);
console.log('Tree traversal for tree created from parent array');
const treeFromArray = treeTraversal.createTreeFromParentArray(treeMock1.parent, treeMock1.data);
treeTraversal.printDFS(treeFromArray);