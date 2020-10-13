const {BinaryTree} = require("../../trees/BinaryTree");

const binaryTree1 = new BinaryTree(0,
    new BinaryTree(1,
        new BinaryTree(3),
        new BinaryTree(4)
    ), new BinaryTree(2,
        new BinaryTree(5),
        new BinaryTree(6)
    )
);

const binaryTree2 = new BinaryTree(5,
    new BinaryTree(10),
    new BinaryTree(10,
        new BinaryTree(2),
        new BinaryTree(3)
    )
);

module.exports = {
    binaryTree1,
    binaryTree2
}
