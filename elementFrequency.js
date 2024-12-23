function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  
  function createLinkedList(arr) {
    let head = new ListNode(0);
    let current = head;
    arr.forEach(val => {
      current.next = new ListNode(val);
      current = current.next;
    });
    return head.next;
  }
  
  function linkedListToArray(head) {
    let result = [];
    while (head) {
      result.push(head.val);
      head = head.next;
    }
    return result;
  }

  function createFrequencyList(list) {
    let frequency = new Map();

    let current = list;

    while (current) {
        if (frequency.has(current.val)) {
            frequency.set(current.val, frequency.get(current.val) + 1);
        } else {
            frequency.set(current.val, 1);
        }
        current = current.next;
    }

    let freqs = Array.from(frequency.values());

    return createLinkedList(freqs);
  }
  
  function testFrequencyList(input, expected) {
    let result = linkedListToArray(createFrequencyList(createLinkedList(input)));
    if (result.length !== expected.length) return false;
    let freq1 = new Map(), freq2 = new Map();
    for (let num of result) freq1.set(num, (freq1.get(num) || 0) + 1);
    for (let num of expected) freq2.set(num, (freq2.get(num) || 0) + 1);
    if (freq1.size !== freq2.size) return false;
    for (let [key, value] of freq1) {
      if (freq2.get(key) !== value) return false;
    }
    return true;
  }
  
  // Test cases
  console.log(testFrequencyList([1, 1, 2, 1, 3], [3, 1, 1]));
  console.log(testFrequencyList([1, 1, 2, 2, 2], [2, 3]));
  console.log(testFrequencyList([6, 5, 4, 3, 2, 1], [1, 1, 1, 1, 1, 1]));
  console.log(testFrequencyList([4, 4, 4, 4], [4]));
  console.log(testFrequencyList([1, 2, 3, 4, 5], [1, 1, 1, 1, 1]));
  console.log(testFrequencyList([], []));
  console.log(testFrequencyList([1, 1, 1], [3]));
  console.log(testFrequencyList([1, 2, 1, 2, 1, 2], [3, 3]));
  // All test cases should log true.