const { printLinkedList, ListNode, generateLinkedList } = require("./utils");

const mergeTwoLists = (lists) => {
  
  let isAllNull = lists.reduce((acc, head) => {
    acc = acc && head === null;
    return acc;
  }, true);

  if(isAllNull) {
    return null;
  }

  let head = null;
  let minIndex = -1;
  let minHead = lists.reduce((min, head, index) => {
    if(head !== null && head.val < min.val) {
      min = head;
      minIndex = index;
    }
    return min;
  }, {val: Number.POSITIVE_INFINITY});

  head = minHead;
  lists[minIndex] = lists[minIndex].next;

  let retHead = head;

  while (true) {
    
    isAllNull = lists.reduce((acc, head) => {
      acc = acc && head === null;
      return acc;
    }, true);

    if(isAllNull) {
      break;
    }
    
    minIndex = -1;
    minHead = lists.reduce((min, head, index) => {
      if(head !== null && head.val < min.val) {
        min = head;
        minIndex = index;
      }
      return min;
    }, {val: Number.POSITIVE_INFINITY});
    
    head.next = minHead;
    lists[minIndex] = lists[minIndex].next;
    
    head = head.next;
  }
  return retHead;
};


const l1 = generateLinkedList([]);
const l2 = generateLinkedList([2,4,9]);
const l3 = generateLinkedList([3,4,5]);
const l4 = mergeTwoLists([l1, l2, l3]);

printLinkedList(l4);