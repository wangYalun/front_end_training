function Person(name) {
  this.name = name;
}

function Student(name, age) {
  Person.call(this, name);
  this.age = age;
}

Student.prototype = new Person();
Student.prototype.constructor = Student;

// ➢ 5年WEB前端开发经验，精通JavaScript，HTML，CSS，精通JavaScript面向对象编程，精通React/jQuery/Zepto/AntDesign开发，精通微信公众/微信小程序开发，
// 熟悉JavaScript设计模式，熟悉前端性能优化，熟悉各浏览器兼容，熟悉移动端屏幕大小适配，熟练掌握前端工程化配置create-react-app/umi/dva/wepback/eslint/prettier;
// ➢ 熟悉C,C++,C#,Java等编程语言（计算机中级专业技术资格-软件设计师）；
// ➢ 3年数据可视化系统开发经验，熟悉数据全埋点技术，熟悉百度地图/高德地图API开发/GIS/d3/Highcharts，熟悉各数据平台SDK；
// ➢ 2年服务器端开发经验，熟练掌握Linux，熟悉NodeJS/Express开发，熟悉PHP/CI 开发
// ➢ 2年数据库开发经验，精通MySQL数据库设计，精通SQL/存储过程编写，精通MySQL 建表，索引，查询优化。
// ➢ 熟悉敏捷项目开发流程，熟悉前端项目持续集成部署CI/CD， 熟练掌握VSCode/Git/SVN/rancher/jenkins/禅道/confluence/jira/sonar的使用

function throttle(method, waiting) {
  var lastRunTime = 0;
  return function () {
    var now = +new Date();
    if (now - lastRunTime > waiting) {
      method.apply(this, arguments);
      lastRunTime = now;
    }
  };
}

function combo(arr1, arr2) {
  let arr = arr1.concat(arr2)
  let result = []
  let obj = {}

  for (let i of arr) {
      if (!obj[i]) {
          result.push(i)
          obj[i] = 1
      }
  }
  return result
}

(function () {
  function count(start, end) {
    const obj = {
      handle: null,
      count: 0,
      start,
      end,
      run() {
        const fun = () => {
          const now = +new Date();
          //   console.log(this.start, this.end);
          if (this.start <= now && now <= this.end) {
            l;
            console.log(this.count);
            this.count++;
          }
          if (now > this.end) {
            this.cancel();
          }

          return fun;
        };
        this.handle = setInterval(fun(), 100);
      },
      cancel() {
        clearInterval(this.handle);
      },
    };
    obj.run();
    return obj;
  }

  const handle = count(+new Date(), +new Date() + 1000);
});

(function () {
  function captureThreeNumbers(str) {
    const reg = /\d{3}/gi;
    const result = str.match(reg);
    console.log(result);
    return !!result && result[0];
  }
  //   captureThreeNumbers("fasdfagdfgsd");

  function getUrlParam(sUrl, sKey) {
    const url = new URL(sUrl);
    if (sKey != null) {
      return url.searchParams.getAll(sKey);
    }
    return url.searchParams;
  }

  console.log(
    getUrlParam(
      "http://www.nowcoder.com?key=allen&key=bo&name=allen#hehe",
      "name"
    )
  );

  function namespace(oNamespace, sPackage) {
    if (sPackage.length <= 0) {
      return;
    }
    var pointer = oNamespace;
    console.log(oNamespace);
    if (sPackage[0] in oNamespace) {
      if (typeof oNamespace[sPackage[0]] !== "object") {
        oNamespace[sPackage[0]] = {};
      }
    } else {
      oNamespace[sPackage[0]] = {};
    }
    oNamespace = oNamespace[sPackage[0]];
    namespace(oNamespace, sPackage.slice(2));
    return pointer;
  }
  console.log(namespace({ a: { test: 1, b: 2 } }, "a.b.c.d"));
  function rgb2hex(sRGB) {
    if (
      typeof sRGB !== "string" ||
      !/^rgb\(\s*\d\s*,\s*\d\s*,\s*\d\)$/.test(sRGB)
    ) {
      return sRGB;
    }
    var matchNums = sRGB.match(/\d+/gi);
    if (matchNums.length !== 3) {
      return sRGB;
    }
    if (
      matchNums.some(function (item) {
        return item < 0 || item > 255;
      })
    ) {
      return sRGB;
    }
    return (
      "#" +
      matchNums
        .map(function (item) {
          return (+item).toString(16);
        })
        .join("")
    );
  }
  console.log(rgb2hex("rgb(255,  245  ,223)"));
});

(function () {
  class Tree {
    constructor() {
      this.adj = [[]]; // 保存树的结点
      this.marked = []; // 标记是否被访问
      this.nodes = 1;
    }
    //打印图
    showGraph() {
      for (let i = 0; i < this.nodes; ++i) {
        let str = "";
        str += i + " -> ";
        for (let j = 0; j < this.adj[i].length; ++j) {
          if (this.adj[i][j] != undefined) {
            str += this.adj[i][j] + " ";
          }
        }
        console.log(str);
      }
    }
    addNode(parentNode) {
      if (this.adj[parentNode]) {
        var currentNodeIndex = this.nodes;
        this.adj[currentNodeIndex] = [];
        this.adj[parentNode].push(currentNodeIndex);
        this.nodes++;
      }
    }
    //深度优先搜索 depthFirstSearch
    dfs(v) {
      var it = this;
      this.marked[v] = true;
      if (this.adj[v] != undefined) {
        console.log("Visited  " + v);
        this.adj[v].forEach(function (item, index, array) {
          if (!it.marked[item]) {
            it.dfs(item);
          }
        });
      }
      this.marked = []; // 重置标记
    }
    //广度优先搜索
    bfs(s) {
      var queue = [];
      this.marked[s] = true;
      queue.push(s);
      while (queue.length > 0) {
        var v = queue.shift();
        if (this.adj[v] != undefined) {
          console.log("Visited " + v);
          this.adj[v].forEach(function (item, index, array) {
            if (!this.marked[item]) {
              this.marked[item] = true;
              queue.push(item);
            }
          }, this);
        }
      }
      this.marked = []; // 重置标记
    }
  }
  var tree = new Tree();
  tree.addNode(0);
  tree.addNode(0);
  tree.addNode(0);
  tree.addNode(1);
  console.log(tree);
  tree.showGraph();

  tree.dfs(0);
  tree.bfs(0);

  // console.log(tree);

  function Find(target, array) {
    // write code here
    for (var i in array) {
      if (array[i][0] <= target && target <= array[i][array[i].length - 1]) {
        var hasArray = array[i];
        for (var j in hasArray) {
          if (hasArray[j] === target) {
            return true;
          }
        }
      }
    }
    return false;
  }
  function printListFromTailToHead(head) {
    // write code here
    var array = [];
    var cur = head;
    array.unshift(cur.val);
    while ((cur = cur.next)) {
      array.unshift(cur.val);
    }
    return array;
  }

  function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
  }
  function reConstructBinaryTree(pre, vin) {
    // write code here
    if (pre.length === 0) {
      return null;
    }
    var root = new TreeNode(pre[0]); // 已知先序遍历，第一个就是root节点

    // 辅助函数，找出左右子树的遍历输出
    function getLetfRightTree(preOrderArray, inOrderArray, rootNode) {
      var nodeIndex = inOrderArray.indexOf(rootNode);
      var leftRightTree = {
        vinLeft: inOrderArray.slice(0, nodeIndex),
        vinRight: inOrderArray.slice(nodeIndex + 1),
      };
      leftRightTree.preLeft = preOrderArray.slice(
        1,
        leftRightTree.vinLeft.length + 1
      );
      leftRightTree.preRigth = preOrderArray.slice(
        leftRightTree.vinLeft.length + 1
      );
      return leftRightTree;
    }
    var leftRightTree = getLetfRightTree(pre, vin, root.val);
    // console.log(leftRightTree);
    // return;
    root.left = reConstructBinaryTree(
      leftRightTree.preLeft,
      leftRightTree.vinLeft
    );
    root.right = reConstructBinaryTree(
      leftRightTree.preRigth,
      leftRightTree.vinRight
    );
    return root;
  }

  var treeRoot = reConstructBinaryTree(
    [1, 2, 4, 7, 3, 5, 6, 8],
    [4, 7, 2, 1, 5, 3, 8, 6]
  );
  function preOrder(node) {
    if (!(node == null)) {
      arguments.callee(node.left);
      arguments.callee(node.right);
      console.log(node.val);
    }
  }
  // preOrder(treeRoot);

  function jumpFloor(number) {
    if (number <= 0) return 0;
    return Math.pow(2, number - 1);
  }

  console.log("30L:" + jumpFloor(40));
});

(function () {
  // 深度拷贝
  function deepClone(obj) {
    var obj = null;
    try {
      obj = JSON.parse(JSON.stringify(obj));
    } catch (e) {
      throw e;
    }
    return obj;
  }

  //
  // 辅助函数
  function findNode(tree, node) {
    var theTree = tree;
    for (var i in theTree) {
      if (node.startWith(theTree[i].name)) {
        return findNode(theTree[i], node.slice(1));
      }
    }
    return false;
  }
  function toTree(data) {
    var result = [];
    if (!Array.isArray(data)) {
      return result;
    }

    data.forEach((item) => {
      let first = null;
      let theTree = result; // 首先从第一层开始
      let k = 0;
      while ((first = item.shift())) {
        var hasFind = findNode(theTree, first);
        console.log(hasFind, theTree, first);
        k++;
        if (hasFind) {
          theTree = hasFind.child;
          // theTree.push({ name: first, child: [] });
        } else {
          theTree.push({ name: first, child: [] });
        }
      }
    });
    return result;
  }

  console.log(
    JSON.stringify(
      toTree([
        ["a", "aa", "aaa", "aaaa"],
        ["b", "bb", "bbb"],
        ["a", "ab", "aba"],
        ["a", "aa", "aab"],
      ])
    )
  );
});


