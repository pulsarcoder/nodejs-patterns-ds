const { BinaryTree, BinaryTreeTraversal } = require("./../trees/BinaryTree");
const { binaryTree1, binaryTree2 } = require("./mock/binaryTreeMock");

const bTreeTraversal = new BinaryTreeTraversal();
console.log('BinaryTree1');
const root = binaryTree2;
console.log('Print PreOrder')
bTreeTraversal.printPreOrder(root);
console.log('Print InOrder')
bTreeTraversal.printInOrder(root);
console.log('Print PostOrder')
bTreeTraversal.printPostOrder(root);
console.log('Printing using BFS')
bTreeTraversal.printLevelOrderWithQueue(root);
console.log('sum of tree => ', bTreeTraversal.sum(root))
console.log('sum of each subtree => ', bTreeTraversal.printSumOfEachSubTree(root));

let binaryTreeRoot = new BinaryTree(3);
binaryTreeRoot = bTreeTraversal.bstInsert(binaryTreeRoot, 1);
binaryTreeRoot = bTreeTraversal.bstInsert(binaryTreeRoot, 2);
binaryTreeRoot = bTreeTraversal.bstInsert(binaryTreeRoot, 3);
binaryTreeRoot = bTreeTraversal.bstInsert(binaryTreeRoot, 4);
binaryTreeRoot = bTreeTraversal.bstInsert(binaryTreeRoot, 5);
binaryTreeRoot = bTreeTraversal.bstInsert(binaryTreeRoot, 6);
console.log('Traversal PreOrder');
bTreeTraversal.printPreOrder(binaryTreeRoot);
console.log('Traversal InOrder');
bTreeTraversal.printPreOrder(binaryTreeRoot);
console.log('Traversal PostOrder');
bTreeTraversal.printPreOrder(binaryTreeRoot);
console.log('Traversal BFS');
bTreeTraversal.printLevelOrderWithQueue(binaryTreeRoot);

console.log('Minimum value of binaryTreeRoot = ', bTreeTraversal.min(binaryTreeRoot));
console.log('Maximum value of binaryTreeRoot = ', bTreeTraversal.max(binaryTreeRoot));
