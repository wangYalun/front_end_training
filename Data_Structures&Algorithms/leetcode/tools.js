module.exports = {
  printLink(head) {
    while (head) {
      console.log(head.val);
      head = head.next;
    }
  },
};
