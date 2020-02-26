/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head === null) {
      return null;
  }
  
  let currentNode = head;
  let revNode = new ListNode(head.val);
  currentNode = currentNode.next;
  
  while (currentNode) {     
    let newNode = new ListNode(currentNode.val);
    newNode.next = revNode;
    revNode = newNode;
    currentNode = currentNode.next;
  }
  
  return revNode;
  
  function ListNode(val) {
      this.val = val;
      this.next = null;
  }
};

// Runtime: 64 ms, faster than 40.07% of JavaScript online submissions for Reverse Linked List.
// Memory Usage: 35.7 MB, less than 15.22% of JavaScript online submissions for Reverse Linked List.