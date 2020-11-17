class Node {
    data;
}

class SinglyNode extends Node {
    next = null;
    constructor(data) {
        super();
        this.data = data;
    }
}

class SinglyLinkedList {
    head = null;

    constructor(head) {
        this.head = head;
    }

    append(node) {
        this.getTail(this.head).next = node;
    }

    prepend(node) {
        const root = this.head;
        this.head = node;
        this.head.next = root;
    }

    insertAfter(node, afterData) {
        this.traverse(this.head, (curNode) => {
            if (curNode.data === afterData) {
                const nextNodeRef = curNode.next;
                curNode.next = node;
                node.next = nextNodeRef;
            }
        })
    }

    getTail(node) {
        if (node.next === null) {
            return node;
        }
        return this.getTail(node.next);
    }

    traverse(node, callback) {
        if (node.next === null) {
            return;
        }
        callback(node);
        this.traverse(node.next, callback);
    }

    printAll() {
        this.traverse(this.head, (node) => console.log('-> ' + node.data));
    }
}

const singlyLinkedList = new SinglyLinkedList(new SinglyNode(1));

singlyLinkedList.append(new SinglyNode(2));
singlyLinkedList.append(new SinglyNode(3));
singlyLinkedList.append(new SinglyNode(4));
singlyLinkedList.append(new SinglyNode(5)); // O(n)
singlyLinkedList.printAll(); // O(n)
singlyLinkedList.prepend(new SinglyNode(0)); // O(1)
singlyLinkedList.insertAfter(new SinglyNode(12), 3); // O(n)
singlyLinkedList.printAll(); // O(n)