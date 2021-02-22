const { printLinkedList, ListNode, generateLinkedList } = require("./utils");

const mergeTwoLists = (l1, l2) => {
  if (l1 === null && l2 === null) {
    return null;
  }
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }

  let head = null;

  if(l1.val < l2.val) {
    head = l1;
    l1 = l1.next;
  } else {
    head = l2;
    l2 = l2.next;
  }

  let retHead = head;

  while (true) {
    if(l1 !== null && l2 !== null) {
      if(l1.val < l2.val) {
        head.next = l1;
        l1 = l1.next;
      } else {
        head.next = l2;
        l2 = l2.next;
      }
    } else if(l1 !== null) {
      head.next = l1;
      l1 = l1.next;
    } else if(l2 !== null) {
      head.next = l2;
      l2 = l2.next;
    } else {
      break;
    }
    head = head.next;
  }
  return retHead;
};


const l1 = generateLinkedList([6]);
const l2 = generateLinkedList([7]);
const l3 = mergeTwoLists(l1, l2);

printLinkedList(l3);