const { printLinkedList, ListNode, generateLinkedList } = require("./utils");

const merge = (head1, head2) => {
  let head = new ListNode();
  let pointer = head;
  while (true) {
    if (head1 !== null && head2 !== null) {
      if (head1.val < head2.val) {
        pointer.val = head1.val;
        head1 = head1.next;
      } else {
        pointer.val = head2.val;
        head2 = head2.next;
      }
    } else if (head1 !== null) {
      pointer.val = head1.val;
      head1 = head1.next;
    } else if (head2 !== null) {
      pointer.val = head2.val;
      head2 = head2.next;
    } else {
      break;
    }
    if (head1 !== null || head2 !== null) {
      pointer.next = new ListNode();
      pointer = pointer.next;
    } else {
      pointer.next = null;
    }
  }
  return head;
};

const list1 = generateLinkedList([1, 3, 5, 7, 9]);
const list2 = generateLinkedList([]);
const list3 = merge(list1, list2);
printLinkedList(list3);