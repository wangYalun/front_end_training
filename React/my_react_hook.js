/**
 * 手动实现React Hooks 原理
 */

let isMount = true; // 区分组件是mounted还是update

let workInProgressHook = null; // 当前指针

const fiber = {
  stateNode: App,
  memorizedState: null, // 链表
};

function useState(initialState) {
  let hook;
  if (isMount) {
    hook = {
      memorizedState: initialState,
      next: null,
      queue: {
        pending: null,
      },
    };
    if (!fiber.memorizedState) {
      fiber.memorizedState = hook;
    } else {
      workInProgressHook.next = hook;
    }
    workInProgressHook = hook;
  } else {
    hook = workInProgressHook;
    workInProgressHook = workInProgressHook.next;
  }
  let baseState = hook.memorizedState;
  if (hook.queue.pending) {
    let firstUpdate = hook.queue.pending.next;
    do {
      const action = firstUpdate.action;
      baseState = action(baseState);
      firstUpdate = firstUpdate.next;
    } while (firstUpdate !== hook.queue.pending.next);
    hook.queue.pending = null;
  }
  hook.memorizedState = baseState;
  return [baseState, dispatchAction.bind(null, hook.queue)];
}

function dispatchAction(queue, action) {
  const update = {
    action,
    next: null,
  };
  if (queue.pending == null) {
    // u0->u0->u0
    update.next = update;
  } else {
    // u0->u0
    // u0->u1->u0
    update.next = queue.pending.next;
    queue.pending.next = update;
  }
  queue.pending = update;
  schedule();
}

// 调度组件
function schedule() {
  workInProgressHook = fiber.memorizedState;
  const app = fiber.stateNode();
  isMount = false;
  return app;
}

// const useNum = () => {
//   const [num, updateNum] = useState(0);
//   return { num, updateNum };
// };

function App() {
  const [num, updateNum] = useState(0);
  const [num1, updateNum1 ] = useState(0);
  const [num2, updateNum2] = useState(0);
  // const { num, updateNum } = useNum();
  // const { num2, updateNum2 } = useNum();

  console.log("isMount?", isMount);
  console.log("num", num);
  console.log("num2", num2);
  console.log("workInProgressHook", workInProgressHook);
  //   const [num1, updateNum1] = useState(0);
  //   const [num2, updateNum2] = useState(0);
  //   const [num3, updateNum3] = useState(0);
  return {
    onClick() {
      updateNum((num) => num + 1);
      updateNum2((num) => num + 1);
      // updateNum((num) => num + 1);
      // updateNum((num) => num + 1);
    },
  };
}

window.app = schedule();
