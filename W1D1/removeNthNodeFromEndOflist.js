var removeNthFromEnd = function(head, n) {
    let total = 0;
    let current = head;
    while (current) {
        total++;
        current = current.next;
    }

    let nthFromFront = total - n;
    let dummy = new ListNode();
    dummy.next = head;

    let prev = dummy;
    current = head;

    while (current) {
        if (nthFromFront === 0) {
           prev.next = current.next;
           return dummy.next;
        } else { 
            nthFromFront--;
            prev = current;
            current = current.next;
        }
    }
 
};