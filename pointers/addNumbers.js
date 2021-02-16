const { printLinkedList, ListNode, generateLinkedList } = require("./utils");

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let carry = 0;
  let sum = 0;

  let l3 = new ListNode();
  let returnNode = l3;
  while (true) {
    let value1 = 0;
    let value2 = 0;
    if (l1) {
      value1 = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      value2 = l2.val;
      l2 = l2.next;
    }
    sum = value1 + value2 + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;
    l3.val = sum;
    if (!l1 && !l2 && !carry) {
      l3.next = null;
      break;
    }
    l3.next = new ListNode();
    l3 = l3.next;
  }
  return returnNode;
};

const number1 = [9, 9, 9, 9, 9, 9, 9];
const number2 = [9, 9, 9, 9];

const l1 = generateLinkedList(number1);
const l2 = generateLinkedList(number2);
const l3 = addTwoNumbers(l1, l2);

printLinkedList(l1);
console.log(`-----------`);
printLinkedList(l2);
console.log(`-----------`);
printLinkedList(l3);