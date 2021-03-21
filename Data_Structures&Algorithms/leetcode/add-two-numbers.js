// 链接
// https://leetcode-cn.com/problems/add-two-numbers/

const tool = require("./tools");

var addTwoNumbers = function (l1, l2) {
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  var resultL = new ListNode();

  function array2Link(arr) {
    var head = new ListNode(arr.shift());
    var current = head;
    while (true) {
      let currentNum = arr.shift();
      if (currentNum == null) {
        break;
      }
      current.next = new ListNode(currentNum);
      current = current.next;
    }
    return head;
  }

  var currentL1 = array2Link(l1);
  //   tool.printLink(currentL1);
  var currentL2 = array2Link(l2);
  //   tool.printLink(currentL2);
  var currentResult = resultL;

  var hasAllNext = true;
  while (hasAllNext) {
    let tempSub =
      currentL1.val + currentL2.val + (currentResult ? currentResult.val : 0);
    console.log(currentL1.val, currentL2.val, currentResult.val);
    // console.log(currentResult);

    if (tempSub >= 10) {
      currentResult.val = tempSub - 10;
      currentResult.next = new ListNode(1);
    } else {
      currentResult.val = tempSub;
    }
    currentL1 = currentL1.next;
    currentL2 = currentL2.next;

    if (currentL1 == null && currentL2 == null) {
      hasAllNext = false;
    } else if (currentL1 == null) {
      currentL1 = new ListNode();
    } else if (currentL2 == null) {
      currentL2 = new ListNode();
    }
    if (hasAllNext) {
      if (currentResult.next == null) {
        currentResult.next = new ListNode();
      }
      currentResult = currentResult.next;
    }
    // console.log("currentResult", currentResult);
  }

  return resultL;
};

// 测试
var l1 = [2, 4, 3];
var l2 = [5, 6, 4];

var result = addTwoNumbers(l1, l2);
tool.printLink(result);
