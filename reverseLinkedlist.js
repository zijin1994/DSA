//chatgpt implementation of the linked list structure.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// Helper class to manage linked list creation and utility methods
class LinkedList {
    constructor(array) {
        this.head = null;
        if (Array.isArray(array)) {
            this.head = this.arrayToList(array);
        }
    }

    // Converts an array to a singly linked list
    arrayToList(array) {
        let dummy = new ListNode(); // Create a dummy node
        let current = dummy;

        for (let num of array) {
            current.next = new ListNode(num);
            current = current.next;
        }

        return dummy.next; // Return the actual head of the list
    }

    // Converts the linked list back to an array for easy visualization
    listToArray(head) {
        let result = [];
        let current = head;
        while (current) {
            result.push(current.val);
            current = current.next;
        }
        return result;
    }
}

var reverseList = function(head) {
    
};


// Create a linked list from an array
const linkedList = new LinkedList([1, 2, 3, 4, 5]);
console.log("Original List:", linkedList.listToArray(linkedList.head));

// Reverse the list
const reversedHead = reverseList(linkedList.head);
console.log("Reversed List:", linkedList.listToArray(reversedHead));