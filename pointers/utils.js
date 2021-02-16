/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// generate linked list
const generateLinkedList = (array) => {
  if(!array.length) {
    return null;
  }
  let list = new ListNode();
  const head = list;
  for (let i = 0; i < array.length; i++) {
    list.val = array[i];
    if (i < array.length - 1) {
      list.next = new ListNode();
      list = list.next;
    } else {
      list.next = null;
    }
  }
  return head;
};

// print linked list
const printLinkedList = (head) => {
  while (head) {
    console.log(head.val);
    head = head.next;
  }
};

module.exports = {
  printLinkedList,
  ListNode,
  generateLinkedList,
};
