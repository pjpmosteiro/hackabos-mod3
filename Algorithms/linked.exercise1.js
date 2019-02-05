// Linked list
class SinglyLinkedListNode {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
    insertNodeAtHead(data) {
        const node = new SinglyLinkedListNode(data);

        if (this.head == null) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;

        }
    }
    deleteNodeAtPosition(position) {
        var node = this.head;
        
        for (let index = 0; index < position; index++) {
            if (node.next != null) {
                node = node.next;
            }
        }
        if (node != null) {
            node.data=node.next.data;
            node.next=node.next.next;  
        }
    }
};

let list = new SinglyLinkedList();
list.insertNode(5);
list.insertNode(20);

function printList(head) {
    if (head != null) {
        console.log(head.data);
        printList(head.next);
    }
}
list.insertNodeAtHead(4);
list.insertNode(21);
list.deleteNodeAtPosition(2);
printList(list.head);
