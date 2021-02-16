const { printLinkedList, ListNode, generateLinkedList } = require("./utils");

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  // get reverted linked list
  // insert on every alternate element until same node is encountered

  let pointer = head;
  let prev = null;
  while (pointer) {
    pointer.prev = prev;
    prev = pointer;
    pointer = pointer.next;
  }
  pointer = head;
  while (pointer && prev) {
    let next = pointer.next;

    if (pointer !== prev) {
      pointer.next = prev;
    } else {
      pointer.next = null;
      break;
    }

    if (prev !== next) {
      prev.next = next;
    } else {
      prev.next = null;
      break;
    }
    prev = prev.prev;
    pointer = next;
  }

  pointer = head;
  // console.log(pointer);
  while (pointer) {
    delete pointer.prev;
    pointer = pointer.next;
  }

  return head;
};

const testCases = [
  {
    list: [1, 2, 3, 4, 5],
  },
  { list: [1, 2, 3, 4] },
  { list: [1, 2, 3] },
];

for(test of testCases) {
  const number1 = test.list;
  const l1 = generateLinkedList(number1);
  const l2 = reorderList(l1);
  printLinkedList(l2);
  console.log('------------------------------');
}
